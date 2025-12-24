<template>
  <div class="data-filter-container">
    <h2 class="filter-title">省份数据筛选</h2>
    <div class="filter-input-wrapper">
      <div class="input-group">
        <input
          type="text"
          v-model="searchValue"
          @input="handleInput"
          @focus="showDropdown = true"
          @blur="handleBlur"
          placeholder="请输入或选择省份名称"
          class="province-input"
        />
        <div
          v-if="showDropdown && filteredProvinces.length > 0"
          class="dropdown-list"
          ref="dropdownRef"
        >
          <div
            v-for="province in filteredProvinces"
            :key="province"
            @click="selectProvince(province)"
            @mousedown.prevent
            class="dropdown-item"
            :class="{ 'active': province === selectedProvince }"
          >
            {{ province }}
          </div>
        </div>
      </div>
      <button
        @click="handleViewDetails"
        :disabled="!selectedProvince"
        class="view-details-btn"
      >
        查看详情
      </button>
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { gdpData } from '../data/gdpData';

export default {
  name: 'DataFilter',
  props: {
    selectedYear: {
      type: Number,
      default: 2024
    }
  },
  emits: ['viewDetails'],
  setup(props, { emit }) {
    const searchValue = ref('');
    const selectedProvince = ref('');
    const showDropdown = ref(false);
    const errorMessage = ref('');
    const dropdownRef = ref(null);

    // 获取所有省份名称
    const allProvinces = ref(gdpData.provinces.map(p => p.name));

    // 根据输入筛选省份
    const filteredProvinces = computed(() => {
      if (!searchValue.value) return [];
      const searchLower = searchValue.value.toLowerCase();
      return allProvinces.value.filter(province => {
        return province.toLowerCase().includes(searchLower);
      });
    });

    // 处理输入变化
    const handleInput = () => {
      errorMessage.value = '';
      if (!searchValue.value) {
        selectedProvince.value = '';
      }
    };

    // 处理失去焦点
    const handleBlur = () => {
      // 延迟关闭下拉菜单，以便点击下拉项时能触发点击事件
      setTimeout(() => {
        showDropdown.value = false;
      }, 200);
    };

    // 选择省份
    const selectProvince = (province) => {
      selectedProvince.value = province;
      searchValue.value = province;
      showDropdown.value = false;
    };

    // 处理查看详情
    const handleViewDetails = () => {
      if (!selectedProvince.value) {
        errorMessage.value = '请先选择一个省份';
        return;
      }

      // 验证省份是否存在
      const provinceExists = gdpData.provinces.some(p => p.name === selectedProvince.value);
      if (!provinceExists) {
        errorMessage.value = '所选省份不存在';
        return;
      }

      errorMessage.value = '';
      emit('viewDetails', selectedProvince.value);
    };

    // 监听外部选中省份变化
    watch(
      () => props.selectedProvince,
      (newProvince) => {
        selectedProvince.value = newProvince;
        searchValue.value = newProvince || '';
      }
    );

    return {
      searchValue,
      selectedProvince,
      showDropdown,
      errorMessage,
      dropdownRef,
      filteredProvinces,
      handleInput,
      handleBlur,
      selectProvince,
      handleViewDetails
    };
  }
};
</script>

<style scoped>
.data-filter-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.filter-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.filter-input-wrapper {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.input-group {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.province-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.province-input:focus {
  outline: none;
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;
  margin-top: 4px;
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item.active {
  background-color: #e6f7ff;
  color: #1890ff;
}

.view-details-btn {
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #1890ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.view-details-btn:hover:not(:disabled) {
  background-color: #40a9ff;
}

.view-details-btn:disabled {
  background-color: #d9d9d9;
  cursor: not-allowed;
}

.error-message {
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .data-filter-container {
    padding: 15px;
  }

  .filter-title {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .filter-input-wrapper {
    flex-direction: column;
  }

  .view-details-btn {
    margin-top: 12px;
    width: 100%;
  }
}
</style>