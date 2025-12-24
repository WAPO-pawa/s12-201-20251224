<template>
  <div class="province-detail" v-if="selectedProvince">
    <div class="detail-header">
      <h2>{{ selectedProvince }} 经济数据详情</h2>
      <button class="close-btn" @click="handleClose">×</button>
    </div>
    <div class="year-selector-section">
      <div class="year-selector">
        <label for="detailYearSelect">年份：</label>
        <select 
          id="detailYearSelect" 
          v-model="currentYear" 
          @change="handleYearChange"
          class="year-select"
        >
          <option v-for="year in years" :key="year" :value="year">{{ year }}年</option>
        </select>
      </div>
    </div>
    
    <div class="detail-content" v-if="provinceData">
      <div class="detail-metrics">
        <div class="metric-item">
          <div class="metric-label">GDP总量</div>
          <div class="metric-value">{{ formatNumber(yearData.total) }} 亿元</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">GDP增长率</div>
          <div class="metric-value metric-growth">{{ yearData.growth }}%</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">第一产业</div>
          <div class="metric-value">{{ formatNumber(yearData.primary) }} 亿元</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">第二产业</div>
          <div class="metric-value">{{ formatNumber(yearData.secondary) }} 亿元</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">第三产业</div>
          <div class="metric-value">{{ formatNumber(yearData.tertiary) }} 亿元</div>
        </div>
      </div>
      
      <!-- 详细图表区域 -->
      <div class="detail-charts">
        <!-- 五年GDP趋势图 -->
        <div class="detail-chart-item">
          <h3>{{ selectedYear }}年经济结构</h3>
          <div class="chart-wrapper">
            <div ref="structureChartRef" class="detail-chart"></div>
            <div class="loading-overlay" v-if="isLoading">
              <div class="loading-spinner"></div>
              <div class="loading-text">数据加载中...</div>
            </div>
          </div>
        </div>
        
        <!-- 五年增长率趋势图 -->
        <div class="detail-chart-item">
          <h3>2020-2024年GDP增长趋势</h3>
          <div class="chart-wrapper">
            <div ref="trendChartRef" class="detail-chart"></div>
            <div class="loading-overlay" v-if="isLoading">
              <div class="loading-spinner"></div>
              <div class="loading-text">数据加载中...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 数据不存在提示 -->
    <div class="detail-empty" v-else>
      <p>未找到{{ selectedProvince }}的{{ selectedYear }}年数据</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';
import { gdpData } from '../data/gdpData';

export default {
  name: 'ProvinceDetail',
  props: {
    selectedProvince: {
      type: String,
      default: null
    },
    selectedYear: {
      type: Number,
      default: 2024
    }
  },
  emits: ['close', 'yearChange'],
  setup(props, { emit }) {
    const structureChartRef = ref(null);
    const trendChartRef = ref(null);
    let structureChart = null;
    let trendChart = null;
    
    // 年份数据
    const years = gdpData.years;
    // 当前选中年份
    const currentYear = ref(props.selectedYear);
    // 加载状态
    const isLoading = ref(false);
    
    // 计算属性：获取选中省份的数据
    const provinceData = computed(() => {
      if (!props.selectedProvince) return null;
      return gdpData.provinces.find(p => p.name === props.selectedProvince) || null;
    });
    
    // 计算属性：获取选中年份的数据
    const yearData = computed(() => {
      if (!provinceData.value) return { total: 0, growth: 0, primary: 0, secondary: 0, tertiary: 0 };
      return provinceData.value.data[currentYear.value] || { total: 0, growth: 0, primary: 0, secondary: 0, tertiary: 0 };
    });
    
    // 格式化数字
    const formatNumber = (num) => {
      return num.toLocaleString('zh-CN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };
    
    // 关闭详情面板
    const handleClose = () => {
      emit('close');
    };
    
    // 处理年份变化
    const handleYearChange = () => {
      emit('yearChange', currentYear.value);
    };
    
    // 初始化经济结构饼图
    const initStructureChart = () => {
      if (!structureChartRef.value || !provinceData.value) return;
      
      structureChart = echarts.init(structureChartRef.value);
      
      const pieData = [
        { name: '第一产业', value: yearData.value.primary, itemStyle: { color: '#52c41a' } },
        { name: '第二产业', value: yearData.value.secondary, itemStyle: { color: '#1890ff' } },
        { name: '第三产业', value: yearData.value.tertiary, itemStyle: { color: '#fa8c16' } }
      ];
      
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c}亿元 ({d}%)'
        },
        series: [
          {
            name: '经济结构',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: pieData
          }
        ]
      };
      
      structureChart.setOption(option);
    };
    
    // 初始化GDP增长趋势图
    const initTrendChart = () => {
      if (!trendChartRef.value || !provinceData.value) return;
      
      trendChart = echarts.init(trendChartRef.value);
      
      const years = gdpData.years;
      const gdpValues = years.map(year => provinceData.value.data[year]?.total || 0);
      
      const option = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}年<br/>GDP总量: {c}亿元'
        },
        xAxis: {
          type: 'category',
          data: years
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}亿元'
          }
        },
        series: [
          {
            name: 'GDP总量',
            type: 'line',
            data: gdpValues,
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              width: 3,
              color: '#1890ff'
            },
            itemStyle: {
              color: '#1890ff'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(24, 144, 255, 0.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(24, 144, 255, 0.1)'
                }
              ])
            }
          }
        ]
      };
      
      trendChart.setOption(option);
    };
    
    // 响应窗口大小变化
    const handleResize = () => {
      structureChart?.resize();
      trendChart?.resize();
    };
    
    // 初始化图表
    const initCharts = () => {
      // 显示加载状态
      isLoading.value = true;
      
      // 初始化两个图表
      initStructureChart();
      initTrendChart();
      
      // 隐藏加载状态
      setTimeout(() => {
        isLoading.value = false;
      }, 200);
    };
    
    // 监听props.selectedYear变化，更新currentYear
    watch(
      () => props.selectedYear,
      (newYear) => {
        currentYear.value = newYear;
      }
    );
    
    // 监听省份或年份变化
    watch(
      [() => props.selectedProvince, () => currentYear.value],
      () => {
        // 销毁现有图表
        if (structureChart) {
          structureChart.dispose();
          structureChart = null;
        }
        if (trendChart) {
          trendChart.dispose();
          trendChart = null;
        }
        
        // 重新初始化图表
        setTimeout(() => {
          initCharts();
        }, 100);
      },
      { immediate: true }
    );
    
    // 生命周期钩子
    onMounted(() => {
      initCharts();
      window.addEventListener('resize', handleResize);
    });
    
    onUnmounted(() => {
      if (structureChart) {
        structureChart.dispose();
      }
      if (trendChart) {
        trendChart.dispose();
      }
      window.removeEventListener('resize', handleResize);
    });
    
    return {
      structureChartRef,
      trendChartRef,
      provinceData,
      yearData,
      formatNumber,
      handleClose,
      handleYearChange,
      currentYear,
      years,
      isLoading
    };
  }
};
</script>

<style scoped>
.province-detail {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.detail-header {
  background-color: #1890ff;
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-header h2 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

/* 年份选择器样式 */
.year-selector-section {
  padding: 16px 20px;
  background-color: #f5f7fa;
  border-bottom: 1px solid #e8e8e8;
}

.year-selector {
  display: flex;
  align-items: center;
  gap: 10px;
}

.year-selector label {
  font-size: 14px;
  color: #595959;
}

.year-select {
  padding: 6px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}

.year-select:hover {
  border-color: #1890ff;
}

.year-select:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  outline: none;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.detail-content {
  padding: 20px;
}

.detail-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.metric-item {
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.metric-label {
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 8px;
}

.metric-value {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.metric-growth {
  color: #52c41a;
}

.detail-charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.detail-chart-item h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
}

.chart-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
}

.detail-chart {
  width: 100%;
  height: 100%;
}

/* 加载状态样式 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 8px;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #1890ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 12px;
  font-size: 13px;
  color: #1890ff;
  font-weight: 500;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.detail-empty {
  padding: 40px 20px;
  text-align: center;
  color: #6c757d;
  font-size: 16px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .detail-metrics {
    grid-template-columns: 1fr;
  }
  
  .detail-charts {
    grid-template-columns: 1fr;
  }
  
  .chart-wrapper {
    height: 250px;
  }
  
  .detail-chart {
    height: 100%;
  }
}
</style>