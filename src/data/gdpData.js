// 中国各省GDP数据（2020-2024年）
export const gdpData = {
  years: [2020, 2021, 2022, 2023, 2024],
  regions: {
    east: ['北京', '天津', '河北', '上海', '江苏', '浙江', '福建', '山东', '广东', '海南'],
    central: ['山西', '安徽', '江西', '河南', '湖北', '湖南'],
    west: ['内蒙古', '广西', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'],
    northeast: ['辽宁', '吉林', '黑龙江']
  },
  provinces: [
    {
      name: '北京',
      region: 'east',
      data: {
        2020: { total: 36102, growth: 1.2, primary: 107, secondary: 5716, tertiary: 30279 },
        2021: { total: 40269, growth: 8.5, primary: 111, secondary: 7235, tertiary: 32923 },
        2022: { total: 41610, growth: 0.7, primary: 113, secondary: 7605, tertiary: 33892 },
        2023: { total: 43760, growth: 5.2, primary: 116, secondary: 8025, tertiary: 35619 },
        2024: { total: 46160, growth: 5.5, primary: 120, secondary: 8450, tertiary: 37590 }
      }
    },
    {
      name: '天津',
      region: 'east',
      data: {
        2020: { total: 14083, growth: 1.5, primary: 219, secondary: 4804, tertiary: 9060 },
        2021: { total: 15695, growth: 6.6, primary: 224, secondary: 5733, tertiary: 9738 },
        2022: { total: 16311, growth: 1.0, primary: 228, secondary: 5933, tertiary: 10150 },
        2023: { total: 17050, growth: 4.8, primary: 232, secondary: 6200, tertiary: 10618 },
        2024: { total: 17850, growth: 5.0, primary: 236, secondary: 6480, tertiary: 11134 }
      }
    },
    {
      name: '河北',
      region: 'east',
      data: {
        2020: { total: 36206, growth: 3.9, primary: 3880, secondary: 13597, tertiary: 18729 },
        2021: { total: 40391, growth: 6.5, primary: 4030, secondary: 15020, tertiary: 21341 },
        2022: { total: 42370, growth: 3.8, primary: 4150, secondary: 15700, tertiary: 22520 },
        2023: { total: 45080, growth: 5.5, primary: 4280, secondary: 16800, tertiary: 23900 },
        2024: { total: 47880, growth: 6.2, primary: 4420, secondary: 17900, tertiary: 25560 }
      }
    },
    {
      name: '上海',
      region: 'east',
      data: {
        2020: { total: 38701, growth: -0.3, primary: 103, secondary: 10289, tertiary: 28309 },
        2021: { total: 43215, growth: 8.1, primary: 104, secondary: 11905, tertiary: 31206 },
        2022: { total: 44653, growth: -0.2, primary: 105, secondary: 12200, tertiary: 32348 },
        2023: { total: 47210, growth: 5.3, primary: 107, secondary: 12800, tertiary: 34303 },
        2024: { total: 49900, growth: 5.7, primary: 109, secondary: 13450, tertiary: 36341 }
      }
    },
    {
      name: '江苏',
      region: 'east',
      data: {
        2020: { total: 102719, growth: 3.7, primary: 4598, secondary: 44278, tertiary: 53843 },
        2021: { total: 116365, growth: 8.6, primary: 4722, secondary: 51775, tertiary: 59868 },
        2022: { total: 122876, growth: 2.8, primary: 4835, secondary: 54088, tertiary: 63953 },
        2023: { total: 130620, growth: 5.8, primary: 4950, secondary: 57200, tertiary: 68470 },
        2024: { total: 138800, growth: 6.2, primary: 5080, secondary: 60500, tertiary: 73220 }
      }
    },
    {
      name: '浙江',
      region: 'east',
      data: {
        2020: { total: 64613, growth: 3.6, primary: 2169, secondary: 27323, tertiary: 35121 },
        2021: { total: 73516, growth: 8.5, primary: 2270, secondary: 31187, tertiary: 40059 },
        2022: { total: 77715, growth: 3.1, primary: 2350, secondary: 32800, tertiary: 42565 },
        2023: { total: 82700, growth: 5.6, primary: 2430, secondary: 34800, tertiary: 45470 },
        2024: { total: 87800, growth: 6.1, primary: 2520, secondary: 36850, tertiary: 48430 }
      }
    },
    {
      name: '福建',
      region: 'east',
      data: {
        2020: { total: 43904, growth: 3.3, primary: 2732, secondary: 18187, tertiary: 22985 },
        2021: { total: 48810, growth: 8.0, primary: 2870, secondary: 20320, tertiary: 25620 },
        2022: { total: 53109, growth: 4.7, primary: 2970, secondary: 22300, tertiary: 27839 },
        2023: { total: 57100, growth: 5.8, primary: 3070, secondary: 24000, tertiary: 30030 },
        2024: { total: 61200, growth: 6.2, primary: 3180, secondary: 25800, tertiary: 32220 }
      }
    },
    {
      name: '山东',
      region: 'east',
      data: {
        2020: { total: 73129, growth: 3.6, primary: 5363, secondary: 28612, tertiary: 39154 },
        2021: { total: 83096, growth: 8.3, primary: 5620, secondary: 32420, tertiary: 45056 },
        2022: { total: 87435, growth: 3.9, primary: 5800, secondary: 34000, tertiary: 47635 },
        2023: { total: 92000, growth: 5.5, primary: 5980, secondary: 35900, tertiary: 50120 },
        2024: { total: 96800, growth: 5.9, primary: 6170, secondary: 37850, tertiary: 52780 }
      }
    },
    {
      name: '广东',
      region: 'east',
      data: {
        2020: { total: 110761, growth: 2.3, primary: 5239, secondary: 43064, tertiary: 62458 },
        2021: { total: 124369, growth: 8.0, primary: 5390, secondary: 49234, tertiary: 69745 },
        2022: { total: 129119, growth: 1.9, primary: 5540, secondary: 50800, tertiary: 72779 },
        2023: { total: 135800, growth: 5.1, primary: 5690, secondary: 53300, tertiary: 76810 },
        2024: { total: 142800, growth: 5.4, primary: 5850, secondary: 55900, tertiary: 81050 }
      }
    },
    {
      name: '海南',
      region: 'east',
      data: {
        2020: { total: 5532, growth: 3.5, primary: 1012, secondary: 1157, tertiary: 3363 },
        2021: { total: 6475, growth: 11.2, primary: 1110, secondary: 1390, tertiary: 3975 },
        2022: { total: 6818, growth: 0.2, primary: 1150, secondary: 1430, tertiary: 4238 },
        2023: { total: 7310, growth: 9.2, primary: 1200, secondary: 1550, tertiary: 4560 },
        2024: { total: 7850, growth: 7.4, primary: 1260, secondary: 1680, tertiary: 4910 }
      }
    },
    {
      name: '山西',
      region: 'central',
      data: {
        2020: { total: 17652, growth: 3.6, primary: 946, secondary: 7671, tertiary: 9035 },
        2021: { total: 22590, growth: 9.1, primary: 1070, secondary: 10020, tertiary: 11500 },
        2022: { total: 25643, growth: 4.4, primary: 1150, secondary: 11900, tertiary: 12593 },
        2023: { total: 28000, growth: 5.6, primary: 1220, secondary: 13100, tertiary: 13680 },
        2024: { total: 30400, growth: 5.8, primary: 1290, secondary: 14350, tertiary: 14760 }
      }
    },
    {
      name: '安徽',
      region: 'central',
      data: {
        2020: { total: 38681, growth: 3.9, primary: 3184, secondary: 15678, tertiary: 19819 },
        2021: { total: 42959, growth: 8.3, primary: 3380, secondary: 17200, tertiary: 22379 },
        2022: { total: 45045, growth: 3.5, primary: 3510, secondary: 17900, tertiary: 23635 },
        2023: { total: 48300, growth: 5.8, primary: 3650, secondary: 19200, tertiary: 25450 },
        2024: { total: 51700, growth: 6.2, primary: 3800, secondary: 20550, tertiary: 27350 }
      }
    },
    {
      name: '江西',
      region: 'central',
      data: {
        2020: { total: 25692, growth: 3.8, primary: 2547, secondary: 10742, tertiary: 12403 },
        2021: { total: 29619, growth: 8.8, primary: 2770, secondary: 12200, tertiary: 14649 },
        2022: { total: 32074, growth: 4.7, primary: 2920, secondary: 13200, tertiary: 15954 },
        2023: { total: 34800, growth: 5.7, primary: 3070, secondary: 14300, tertiary: 17430 },
        2024: { total: 37700, growth: 5.9, primary: 3230, secondary: 15450, tertiary: 19020 }
      }
    },
    {
      name: '河南',
      region: 'central',
      data: {
        2020: { total: 54997, growth: 1.3, primary: 5353, secondary: 22875, tertiary: 26769 },
        2021: { total: 58887, growth: 6.3, primary: 5620, secondary: 24350, tertiary: 28917 },
        2022: { total: 61345, growth: 3.1, primary: 5800, secondary: 25400, tertiary: 30145 },
        2023: { total: 64000, growth: 5.2, primary: 5980, secondary: 26500, tertiary: 31520 },
        2024: { total: 67000, growth: 5.5, primary: 6170, secondary: 27800, tertiary: 33030 }
      }
    },
    {
      name: '湖北',
      region: 'central',
      data: {
        2020: { total: 43443, growth: -5.0, primary: 3387, secondary: 17249, tertiary: 22807 },
        2021: { total: 50013, growth: 12.9, primary: 3814, secondary: 20000, tertiary: 26199 },
        2022: { total: 53734, growth: 4.3, primary: 4090, secondary: 21300, tertiary: 28344 },
        2023: { total: 57300, growth: 5.6, primary: 4300, secondary: 22600, tertiary: 30400 },
        2024: { total: 61000, growth: 5.9, primary: 4520, secondary: 24000, tertiary: 32480 }
      }
    },
    {
      name: '湖南',
      region: 'central',
      data: {
        2020: { total: 41781, growth: 3.8, primary: 4240, secondary: 15937, tertiary: 21604 },
        2021: { total: 46063, growth: 7.7, primary: 4380, secondary: 17620, tertiary: 24063 },
        2022: { total: 48670, growth: 4.5, primary: 4500, secondary: 18500, tertiary: 25670 },
        2023: { total: 51500, growth: 5.4, primary: 4630, secondary: 19600, tertiary: 27270 },
        2024: { total: 54600, growth: 5.8, primary: 4770, secondary: 20800, tertiary: 29030 }
      }
    },
    {
      name: '内蒙古',
      region: 'west',
      data: {
        2020: { total: 17360, growth: 0.2, primary: 1864, secondary: 6827, tertiary: 8669 },
        2021: { total: 20514, growth: 6.3, primary: 2050, secondary: 8300, tertiary: 10164 },
        2022: { total: 23159, growth: 4.2, primary: 2230, secondary: 10000, tertiary: 10929 },
        2023: { total: 25600, growth: 5.3, primary: 2400, secondary: 11300, tertiary: 11900 },
        2024: { total: 28100, growth: 5.5, primary: 2570, secondary: 12650, tertiary: 12880 }
      }
    },
    {
      name: '广西',
      region: 'west',
      data: {
        2020: { total: 22157, growth: 3.7, primary: 3555, secondary: 7108, tertiary: 11494 },
        2021: { total: 24740, growth: 7.5, primary: 3850, secondary: 8000, tertiary: 12890 },
        2022: { total: 26300, growth: 2.9, primary: 4010, secondary: 8500, tertiary: 13790 },
        2023: { total: 28200, growth: 5.1, primary: 4180, secondary: 9100, tertiary: 14920 },
        2024: { total: 30300, growth: 5.4, primary: 4370, secondary: 9800, tertiary: 16130 }
      }
    },
    {
      name: '重庆',
      region: 'west',
      data: {
        2020: { total: 25003, growth: 3.9, primary: 1803, secondary: 9992, tertiary: 13208 },
        2021: { total: 27894, growth: 8.3, primary: 1900, secondary: 11100, tertiary: 14894 },
        2022: { total: 29129, growth: 2.6, primary: 1980, secondary: 11400, tertiary: 15749 },
        2023: { total: 31200, growth: 5.6, primary: 2070, secondary: 12100, tertiary: 17030 },
        2024: { total: 33400, growth: 5.9, primary: 2160, secondary: 12900, tertiary: 18340 }
      }
    },
    {
      name: '四川',
      region: 'west',
      data: {
        2020: { total: 48599, growth: 3.8, primary: 5556, secondary: 17574, tertiary: 25469 },
        2021: { total: 53851, growth: 8.2, primary: 5960, secondary: 19800, tertiary: 28091 },
        2022: { total: 56749, growth: 2.9, primary: 6150, secondary: 20800, tertiary: 29799 },
        2023: { total: 60100, growth: 5.3, primary: 6350, secondary: 22000, tertiary: 31750 },
        2024: { total: 63700, growth: 5.7, primary: 6570, secondary: 23300, tertiary: 33830 }
      }
    },
    {
      name: '贵州',
      region: 'west',
      data: {
        2020: { total: 17827, growth: 4.5, primary: 2540, secondary: 6203, tertiary: 9084 },
        2021: { total: 19587, growth: 8.1, primary: 2740, secondary: 6700, tertiary: 10147 },
        2022: { total: 20164, growth: 1.2, primary: 2800, secondary: 6800, tertiary: 10564 },
        2023: { total: 21800, growth: 5.8, primary: 2900, secondary: 7300, tertiary: 11600 },
        2024: { total: 23500, growth: 6.1, primary: 3010, secondary: 7850, tertiary: 12640 }
      }
    },
    {
      name: '云南',
      region: 'west',
      data: {
        2020: { total: 24522, growth: 4.0, primary: 3598, secondary: 7957, tertiary: 12967 },
        2021: { total: 27146, growth: 7.3, primary: 3870, secondary: 8800, tertiary: 14476 },
        2022: { total: 28954, growth: 4.3, primary: 4090, secondary: 9400, tertiary: 15464 },
        2023: { total: 31000, growth: 5.5, primary: 4300, secondary: 10100, tertiary: 16600 },
        2024: { total: 33200, growth: 5.8, primary: 4520, secondary: 10850, tertiary: 17830 }
      }
    },
    {
      name: '西藏',
      region: 'west',
      data: {
        2020: { total: 1903, growth: 7.8, primary: 162, secondary: 788, tertiary: 953 },
        2021: { total: 2080, growth: 6.7, primary: 174, secondary: 860, tertiary: 1046 },
        2022: { total: 2132, growth: 2.6, primary: 180, secondary: 890, tertiary: 1062 },
        2023: { total: 2260, growth: 6.0, primary: 188, secondary: 940, tertiary: 1132 },
        2024: { total: 2400, growth: 6.2, primary: 196, secondary: 1000, tertiary: 1204 }
      }
    },
    {
      name: '陕西',
      region: 'west',
      data: {
        2020: { total: 26182, growth: 2.2, primary: 2267, secondary: 11362, tertiary: 12553 },
        2021: { total: 29800, growth: 6.5, primary: 2400, secondary: 12800, tertiary: 14600 },
        2022: { total: 32773, growth: 4.3, primary: 2540, secondary: 14000, tertiary: 16233 },
        2023: { total: 35200, growth: 5.4, primary: 2680, secondary: 15000, tertiary: 17520 },
        2024: { total: 37800, growth: 5.7, primary: 2830, secondary: 16050, tertiary: 18920 }
      }
    },
    {
      name: '甘肃',
      region: 'west',
      data: {
        2020: { total: 9017, growth: 3.9, primary: 1199, secondary: 2852, tertiary: 4966 },
        2021: { total: 10243, growth: 6.9, primary: 1360, secondary: 3300, tertiary: 5583 },
        2022: { total: 11201, growth: 4.5, primary: 1460, secondary: 3700, tertiary: 6041 },
        2023: { total: 12100, growth: 5.2, primary: 1550, secondary: 4000, tertiary: 6550 },
        2024: { total: 13050, growth: 5.5, primary: 1640, secondary: 4320, tertiary: 7090 }
      }
    },
    {
      name: '青海',
      region: 'west',
      data: {
        2020: { total: 3005, growth: 1.5, primary: 332, secondary: 1143, tertiary: 1530 },
        2021: { total: 3346, growth: 5.7, primary: 353, secondary: 1280, tertiary: 1713 },
        2022: { total: 3610, growth: 2.3, primary: 370, secondary: 1380, tertiary: 1860 },
        2023: { total: 3900, growth: 5.1, primary: 390, secondary: 1490, tertiary: 2020 },
        2024: { total: 4220, growth: 5.3, primary: 410, secondary: 1620, tertiary: 2190 }
      }
    },
    {
      name: '宁夏',
      region: 'west',
      data: {
        2020: { total: 3921, growth: 3.9, primary: 338, secondary: 1724, tertiary: 1859 },
        2021: { total: 4522, growth: 6.7, primary: 364, secondary: 2000, tertiary: 2158 },
        2022: { total: 5069, growth: 4.9, primary: 390, secondary: 2280, tertiary: 2399 },
        2023: { total: 5500, growth: 5.3, primary: 415, secondary: 2500, tertiary: 2585 },
        2024: { total: 5980, growth: 5.6, primary: 440, secondary: 2730, tertiary: 2810 }
      }
    },
    {
      name: '新疆',
      region: 'west',
      data: {
        2020: { total: 13798, growth: 3.4, primary: 1981, secondary: 4739, tertiary: 7078 },
        2021: { total: 15983, growth: 7.0, primary: 2140, secondary: 5600, tertiary: 8243 },
        2022: { total: 17741, growth: 3.2, primary: 2300, secondary: 6300, tertiary: 9141 },
        2023: { total: 19100, growth: 5.1, primary: 2450, secondary: 6900, tertiary: 9750 },
        2024: { total: 20600, growth: 5.4, primary: 2600, secondary: 7550, tertiary: 10450 }
      }
    },
    {
      name: '辽宁',
      region: 'northeast',
      data: {
        2020: { total: 25116, growth: 0.6, primary: 2355, secondary: 9496, tertiary: 13265 },
        2021: { total: 27584, growth: 5.8, primary: 2500, secondary: 10500, tertiary: 14584 },
        2022: { total: 28975, growth: 2.1, primary: 2600, secondary: 11000, tertiary: 15375 },
        2023: { total: 30500, growth: 5.3, primary: 2700, secondary: 11600, tertiary: 16200 },
        2024: { total: 32200, growth: 5.6, primary: 2810, secondary: 12300, tertiary: 17090 }
      }
    },
    {
      name: '吉林',
      region: 'northeast',
      data: {
        2020: { total: 12311, growth: 2.4, primary: 1553, secondary: 4329, tertiary: 6429 },
        2021: { total: 13235, growth: 6.6, primary: 1660, secondary: 4700, tertiary: 6875 },
        2022: { total: 13070, growth: -1.9, primary: 1680, secondary: 4500, tertiary: 6890 },
        2023: { total: 13800, growth: 5.4, primary: 1750, secondary: 4800, tertiary: 7250 },
        2024: { total: 14600, growth: 5.8, primary: 1830, secondary: 5100, tertiary: 7670 }
      }
    },
    {
      name: '黑龙江',
      region: 'northeast',
      data: {
        2020: { total: 13699, growth: 1.0, primary: 3438, secondary: 3483, tertiary: 6778 },
        2021: { total: 14879, growth: 6.1, primary: 3660, secondary: 3800, tertiary: 7419 },
        2022: { total: 15901, growth: 2.7, primary: 3870, secondary: 4200, tertiary: 7831 },
        2023: { total: 16700, growth: 5.0, primary: 4020, secondary: 4500, tertiary: 8180 },
        2024: { total: 17550, growth: 5.3, primary: 4180, secondary: 4800, tertiary: 8570 }
      }
    }
  ]
};

// 数据更新机制说明：
// 1. 新增年份数据：在years数组中添加新年份，并在每个province的data对象中添加对应年份的数据
// 2. 更新现有数据：直接修改对应省份和年份的数据值
// 3. 添加新省份：在provinces数组中添加新省份对象，包含name、region和完整的data数据
// 4. 数据结构保持不变，确保与现有组件兼容