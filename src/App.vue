<template>
  <div class="app-container">
    <header class="app-header">
      <h1>中国各省GDP数据可视化</h1>
    </header>

    <main class="app-main">
      <!-- 省份数据筛选模块 -->
      <DataFilter 
        :selectedYear="selectedYear" 
        @viewDetails="handleViewDetails" 
      />
      
      <!-- 全国各省份GDP数据条形统计图模块 -->
      <BarChart 
        :selectedYear="selectedYear" 
        :selectedProvince="selectedProvince"
        @provinceClick="handleProvinceClick"
        @yearChange="handleYearChange"
      />
      
      <!-- 省份详情组件 -->
      <section class="detail-section" v-if="selectedProvince">
        <ProvinceDetail
          :selectedProvince="selectedProvince"
          :selectedYear="selectedYear"
          @close="handleCloseDetail"
          @yearChange="handleYearChange"
        />
      </section>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p>© 2024 中国GDP数据可视化 - 使用Vue 3 + ECharts开发</p>
        <div class="data-info">
          <p>数据来源：国家统计局（National Bureau of Statistics）</p>
          <p>数据更新机制：支持通过API接口定期更新最新GDP数据</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import ProvinceDetail from './components/ProvinceDetail.vue';
import BarChart from './components/BarChart.vue';
import DataFilter from './components/DataFilter.vue';

export default {
  name: 'App',
  components: {
    ProvinceDetail,
    BarChart,
    DataFilter
  },
  setup() {
    // 全局状态管理
    const selectedYear = ref(2024); // 默认选择最新年份
    const selectedProvince = ref('广东省'); // 默认选择广东省

    // 处理关闭省份详情
    const handleCloseDetail = () => {
      selectedProvince.value = null;
    };

    // 处理查看省份详情
    const handleViewDetails = (province) => {
      selectedProvince.value = province;
    };

    // 处理省份点击事件
    const handleProvinceClick = (province) => {
      selectedProvince.value = province;
    };

    // 处理年份变化事件
    const handleYearChange = (year) => {
      selectedYear.value = year;
    };

    return {
      selectedYear,
      selectedProvince,
      handleCloseDetail,
      handleViewDetails,
      handleProvinceClick,
      handleYearChange
    };
  }
};
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
}

/* 应用容器 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 头部样式 */
.app-header {
  background-color: #1890ff;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  font-size: 24px;
  font-weight: bold;
}

/* 主体内容 */
.app-main {
  flex: 1;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* 图表区块 */
.chart-section {
  margin-bottom: 30px;
}

/* 省份详情区块 */
.detail-section {
  margin-top: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* 图表网格 */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.chart-item {
  width: 100%;
}

/* 底部样式 */
.app-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.data-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  font-size: 13px;
  opacity: 0.8;
}

/* 响应式设计 - 移动端底部样式 */
@media (max-width: 768px) {
  .footer-content {
    gap: 8px;
  }
  
  .data-info {
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
  }
}

/* 多省份对比区域样式 */
.comparison-section {
  margin-top: 40px;
}

.comparison-section h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

.selector-column {
  width: 100%;
}

.chart-column {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .app-main {
    padding: 10px;
  }

  .charts-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .app-header h1 {
    font-size: 20px;
  }
  
  .comparison-section {
    margin-top: 30px;
  }
}
</style>