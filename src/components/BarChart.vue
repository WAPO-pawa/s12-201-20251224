<template>
  <div class="bar-chart-container">
    <div class="chart-header">
      <h2 class="chart-title">全国各省份GDP数据对比</h2>
      <div class="year-selector">
        <label for="yearSelect">年份：</label>
        <select 
          id="yearSelect" 
          v-model="currentYear" 
          @change="handleYearChange"
          class="year-select"
        >
          <option v-for="year in years" :key="year" :value="year">{{ year }}年</option>
        </select>
      </div>
    </div>
    <div class="chart-wrapper">
      <div ref="chartRef" class="bar-chart"></div>
      <div class="loading-overlay" v-if="isLoading">
        <div class="loading-spinner"></div>
        <div class="loading-text">数据加载中...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';
import { gdpData } from '../data/gdpData';

export default {
  name: 'BarChart',
  props: {
    selectedYear: {
      type: Number,
      default: 2024
    },
    selectedProvince: {
      type: String,
      default: ''
    }
  },
  emits: ['provinceClick', 'yearChange'],
  setup(props, { emit }) {
    const chartRef = ref(null);
    let chart = null;

    // 年份数据
    const years = gdpData.years;
    // 当前选中年份
    const currentYear = ref(props.selectedYear);
    // 加载状态
    const isLoading = ref(false);

    // 格式化数字
    const formatNumber = (num) => {
      return num.toLocaleString('zh-CN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };

    // 处理年份变化
    const handleYearChange = () => {
      emit('yearChange', currentYear.value);
    };

    // 初始化图表
    const initChart = () => {
      if (!chartRef.value) return;

      // 显示加载状态
      isLoading.value = true;

      // 获取数据并按GDP从高到低排序
      const provinces = [...gdpData.provinces].sort((a, b) => {
        return b.data[props.selectedYear].total - a.data[props.selectedYear].total;
      });

      const provinceNames = provinces.map(p => p.name);
      const gdpValues = provinces.map(p => p.data[props.selectedYear].total);

      // 创建ECharts实例
      chart = echarts.init(chartRef.value);

      // 配置图表
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: '{b}<br/>GDP总量: {c}亿元'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: provinceNames,
          axisLabel: {
            rotate: 45,
            fontSize: 12,
            interval: 0
          }
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
            type: 'bar',
            data: gdpValues,
            itemStyle: {
              color: (params) => {
                // 为选中的省份设置不同颜色
                if (provinceNames[params.dataIndex] === props.selectedProvince) {
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#ff4d4f' },
                    { offset: 1, color: '#ff7875' }
                  ]);
                }
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#1890ff' },
                  { offset: 1, color: '#722ed1' }
                ]);
              }
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#36cfc9' },
                  { offset: 1, color: '#52c41a' }
                ])
              }
            },
            label: {
              show: false,
              position: 'top',
              formatter: (params) => {
                return formatNumber(params.value);
              },
              fontSize: 10
            }
          }
        ],
        // 添加点击事件
        onClick: (params) => {
          emit('provinceClick', provinceNames[params.dataIndex]);
        }
      };

      // 应用配置
      chart.setOption(option);
      
      // 隐藏加载状态
      isLoading.value = false;
    };

    // 响应窗口大小变化
    const handleResize = () => {
      chart?.resize();
    };

    // 监听年份变化
    watch(
      () => props.selectedYear,
      () => {
        // 销毁现有图表
        if (chart) {
          chart.dispose();
          chart = null;
        }
        // 重新初始化图表
        setTimeout(() => {
          initChart();
        }, 100);
      }
    );

    // 监听选中省份变化
    watch(
      () => props.selectedProvince,
      () => {
        // 更新图表以高亮选中的省份
        if (chart) {
          chart.setOption({
            series: [{
              itemStyle: {
                color: (params) => {
                  const provinces = [...gdpData.provinces].sort((a, b) => {
                    return b.data[props.selectedYear].total - a.data[props.selectedYear].total;
                  });
                  const provinceNames = provinces.map(p => p.name);
                  if (provinceNames[params.dataIndex] === props.selectedProvince) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#ff4d4f' },
                      { offset: 1, color: '#ff7875' }
                    ]);
                  }
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#1890ff' },
                    { offset: 1, color: '#722ed1' }
                  ]);
                }
              }
            }]
          });
        }
      }
    );

    // 监听selectedYear变化，更新currentYear
    watch(
      () => props.selectedYear,
      (newYear) => {
        currentYear.value = newYear;
      }
    );

    // 生命周期钩子
    onMounted(() => {
      initChart();
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      if (chart) {
        chart.dispose();
      }
      window.removeEventListener('resize', handleResize);
    });

    return {
      chartRef,
      currentYear,
      handleYearChange,
      years,
      isLoading
    };
  }
};
</script>

<style scoped>
.bar-chart-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.chart-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.chart-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
}

.bar-chart {
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
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1890ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 16px;
  font-size: 14px;
  color: #1890ff;
  font-weight: 500;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .bar-chart-container {
    padding: 15px;
  }

  .chart-title {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .chart-wrapper {
    height: 400px;
  }

  .bar-chart {
    height: 100%;
  }
}
</style>