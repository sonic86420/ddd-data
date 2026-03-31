const DRUG_DATA = [
  {
    "drug": "阿洛西林注射剂",
    "generic": "阿洛西林",
    "route": "P",
    "ddd": "12"
  },
  {
    "drug": "阿米卡星注射剂",
    "generic": "阿米卡星",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "阿莫西林干糖浆",
    "generic": "阿莫西林",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林胶囊",
    "generic": "阿莫西林",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林颗粒",
    "generic": "阿莫西林",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林克拉维酸混悬剂",
    "generic": "阿莫西林克拉维酸",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林克拉维酸颗粒剂",
    "generic": "阿莫西林克拉维酸",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林克拉维酸片",
    "generic": "阿莫西林克拉维酸",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林克拉维酸注射剂",
    "generic": "阿莫西林克拉维酸",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "阿莫西林片",
    "generic": "阿莫西林",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林舒巴坦（匹酯）混悬剂",
    "generic": "阿莫西林舒巴坦",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林舒巴坦（匹酯）片",
    "generic": "阿莫西林舒巴坦",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "阿莫西林舒巴坦注射剂",
    "generic": "阿莫西林舒巴坦",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "阿莫西林注射剂",
    "generic": "阿莫西林",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "阿奇霉素干混悬剂",
    "generic": "阿奇霉素",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "阿奇霉素胶囊",
    "generic": "阿奇霉素",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "阿奇霉素颗粒剂",
    "generic": "阿奇霉素",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "阿奇霉素片",
    "generic": "阿奇霉素",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "阿奇霉素注射剂",
    "generic": "阿奇霉素",
    "route": "P",
    "ddd": "0.5"
  },
  {
    "drug": "艾沙康唑胶囊",
    "generic": "艾沙康唑",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "艾沙康唑注射剂",
    "generic": "艾沙康唑",
    "route": "P",
    "ddd": "0.2"
  },
  {
    "drug": "氨苄西林胶囊",
    "generic": "氨苄西林",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "氨苄西林氯唑西林注射剂",
    "generic": "氨苄西林氯唑西林",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "氨苄西林舒巴坦注射剂",
    "generic": "氨苄西林舒巴坦",
    "route": "P",
    "ddd": "6"
  },
  {
    "drug": "氨苄西林注射剂",
    "generic": "氨苄西林",
    "route": "P",
    "ddd": "6"
  },
  {
    "drug": "氨曲南注射剂",
    "generic": "氨曲南",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "奥马环素片",
    "generic": "奥马环素",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "奥马环素注射剂",
    "generic": "奥马环素",
    "route": "P",
    "ddd": "0.1"
  },
  {
    "drug": "奥硝唑片",
    "generic": "奥硝唑",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "奥硝唑注射剂",
    "generic": "奥硝唑",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "苯唑西林片",
    "generic": "苯唑西林",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "苯唑西林注射剂",
    "generic": "苯唑西林",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "比阿培南注射剂",
    "generic": "比阿培南",
    "route": "P",
    "ddd": "1.2"
  },
  {
    "drug": "吡哌酸片",
    "generic": "吡哌酸",
    "route": "O",
    "ddd": "0.8"
  },
  {
    "drug": "苄星青霉素注射剂",
    "generic": "苄星青霉素",
    "route": "P",
    "ddd": "3.6"
  },
  {
    "drug": "泊沙康唑口服液",
    "generic": "泊沙康唑",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "泊沙康唑片",
    "generic": "泊沙康唑",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "泊沙康唑注射剂",
    "generic": "泊沙康唑",
    "route": "P",
    "ddd": "0.3"
  },
  {
    "drug": "达托霉素注射剂",
    "generic": "达托霉素",
    "route": "P",
    "ddd": "0.28"
  },
  {
    "drug": "大观霉素注射剂",
    "generic": "大观霉素",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "地红霉素片",
    "generic": "地红霉素",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "多黏菌素B注射剂",
    "generic": "多黏菌素B",
    "route": "P",
    "ddd": "0.15"
  },
  {
    "drug": "多黏菌素E注射剂（甲磺酸盐）",
    "generic": "多黏菌素E（黏菌素）",
    "route": "P",
    "ddd": "900万U"
  },
  {
    "drug": "多西环素片",
    "generic": "多西环素",
    "route": "O",
    "ddd": "0.1"
  },
  {
    "drug": "多西环素注射剂",
    "generic": "多西环素",
    "route": "P",
    "ddd": "0.1"
  },
  {
    "drug": "依拉环素注射剂",
    "generic": "依拉环素",
    "route": "P",
    "ddd": "0.14"
  },
  {
    "drug": "厄他培南注射剂",
    "generic": "厄他培南",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "法罗培南胶囊",
    "generic": "法罗培南",
    "route": "O",
    "ddd": "0.75"
  },
  {
    "drug": "法罗培南颗粒剂",
    "generic": "法罗培南",
    "route": "O",
    "ddd": "0.75"
  },
  {
    "drug": "法罗培南片",
    "generic": "法罗培南",
    "route": "O",
    "ddd": "0.75"
  },
  {
    "drug": "夫西地酸注射剂",
    "generic": "夫西地酸",
    "route": "P",
    "ddd": "1.5"
  },
  {
    "drug": "呋喃妥因片",
    "generic": "呋喃妥因",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "伏立康唑片",
    "generic": "伏立康唑",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "伏立康唑注射剂",
    "generic": "伏立康唑",
    "route": "P",
    "ddd": "0.4"
  },
  {
    "drug": "氟胞嘧啶片",
    "generic": "氟胞嘧啶",
    "route": "O",
    "ddd": "10"
  },
  {
    "drug": "氟胞嘧啶注射液剂",
    "generic": "氟胞嘧啶",
    "route": "P",
    "ddd": "10"
  },
  {
    "drug": "氟康唑胶囊",
    "generic": "氟康唑",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "氟康唑颗粒剂",
    "generic": "氟康唑",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "氟康唑片",
    "generic": "氟康唑",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "氟康唑注射剂",
    "generic": "氟康唑",
    "route": "P",
    "ddd": "0.2"
  },
  {
    "drug": "氟氯西林胶囊",
    "generic": "氟氯西林",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "氟氯西林注射剂",
    "generic": "氟氯西林",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "氟氧头孢注射剂",
    "generic": "氟氧头孢",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "红霉素（硬脂酸）颗粒剂",
    "generic": "红霉素",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "红霉素片（肠溶）",
    "generic": "红霉素",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "红霉素注射剂",
    "generic": "红霉素",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "琥乙红霉素片",
    "generic": "红霉素",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "螺旋霉素片",
    "generic": "螺旋霉素",
    "route": "O",
    "ddd": "3"
  },
  {
    "drug": "环丙沙星片",
    "generic": "环丙沙星",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "环丙沙星注射剂",
    "generic": "环丙沙星",
    "route": "P",
    "ddd": "0.8"
  },
  {
    "drug": "磺胺甲 唑 磺胺甲",
    "generic": "唑",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "磺胺嘧啶片",
    "generic": "磺胺嘧啶",
    "route": "O",
    "ddd": "0.6"
  },
  {
    "drug": "磺苄西林注射剂",
    "generic": "磺苄西林",
    "route": "P",
    "ddd": "15"
  },
  {
    "drug": "吉米沙星片",
    "generic": "吉米沙星",
    "route": "O",
    "ddd": "0.32"
  },
  {
    "drug": "加替沙星片",
    "generic": "加替沙星",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "加替沙星注射剂",
    "generic": "加替沙星",
    "route": "P",
    "ddd": "0.4"
  },
  {
    "drug": "甲砜霉素片",
    "generic": "甲砜霉素",
    "route": "O",
    "ddd": "1.5"
  },
  {
    "drug": "甲砜霉素注射剂",
    "generic": "甲砜霉素",
    "route": "P",
    "ddd": "1.5"
  },
  {
    "drug": "甲硝唑片",
    "generic": "甲硝唑",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "甲硝唑注射剂",
    "generic": "甲硝唑",
    "route": "P",
    "ddd": "1.5"
  },
  {
    "drug": "甲氧苄啶片",
    "generic": "甲氧苄啶",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "甲氧苄啶注射剂",
    "generic": "甲氧苄啶",
    "route": "P",
    "ddd": "0.4"
  },
  {
    "drug": "交沙霉素片",
    "generic": "交沙霉素",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "卡泊芬净注射剂",
    "generic": "卡泊芬净",
    "route": "P",
    "ddd": "0.05"
  },
  {
    "drug": "克拉霉素干混悬剂",
    "generic": "克拉霉素",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "克拉霉素胶囊",
    "generic": "克拉霉素",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "克拉霉素颗粒剂",
    "generic": "克拉霉素",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "克拉霉素片",
    "generic": "克拉霉素",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "克林霉素胶囊",
    "generic": "克林霉素",
    "route": "O",
    "ddd": "1.2"
  },
  {
    "drug": "克林霉素颗粒剂",
    "generic": "克林霉素",
    "route": "O",
    "ddd": "1.2"
  },
  {
    "drug": "克林霉素片",
    "generic": "克林霉素",
    "route": "O",
    "ddd": "1.2"
  },
  {
    "drug": "克林霉素注射剂",
    "generic": "克林霉素",
    "route": "P",
    "ddd": "1.8"
  },
  {
    "drug": "拉氧头孢注射剂",
    "generic": "拉氧头孢",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "利福霉素注射剂",
    "generic": "利福霉素",
    "route": "P",
    "ddd": "0.6"
  },
  {
    "drug": "利奈唑胺片",
    "generic": "利奈唑胺",
    "route": "O",
    "ddd": "1.2"
  },
  {
    "drug": "利奈唑胺注射剂",
    "generic": "利奈唑胺",
    "route": "P",
    "ddd": "1.2"
  },
  {
    "drug": "乌洛托品（马尿酸盐）",
    "generic": "乌洛托品",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "乌洛托品（扁桃酸盐）",
    "generic": "乌洛托品",
    "route": "O",
    "ddd": "3"
  },
  {
    "drug": "链霉素注射剂",
    "generic": "链霉素",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "两性霉素Ｂ胆固醇硫酸酯注射剂",
    "generic": "两性霉素Ｂ",
    "route": "P",
    "ddd": "0.21"
  },
  {
    "drug": "两性霉素Ｂ脂质复合体注射剂",
    "generic": "两性霉素Ｂ",
    "route": "P",
    "ddd": "0.21"
  },
  {
    "drug": "两性霉素Ｂ脂质体注射剂",
    "generic": "两性霉素Ｂ",
    "route": "P",
    "ddd": "0.21"
  },
  {
    "drug": "两性霉素Ｂ注射剂",
    "generic": "两性霉素Ｂ",
    "route": "P",
    "ddd": "0.035"
  },
  {
    "drug": "林可霉素片",
    "generic": "林可霉素",
    "route": "O",
    "ddd": "1.8"
  },
  {
    "drug": "林可霉素注射剂",
    "generic": "林可霉素",
    "route": "P",
    "ddd": "1.8"
  },
  {
    "drug": "磷霉素氨丁三醇散",
    "generic": "磷霉素",
    "route": "O",
    "ddd": "3"
  },
  {
    "drug": "磷霉素口服剂",
    "generic": "磷霉素",
    "route": "O",
    "ddd": "3"
  },
  {
    "drug": "磷霉素注射剂",
    "generic": "磷霉素",
    "route": "P",
    "ddd": "8"
  },
  {
    "drug": "芦氟沙星片",
    "generic": "芦氟沙星",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "罗红霉素胶囊",
    "generic": "罗红霉素",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "罗红霉素片",
    "generic": "罗红霉素",
    "route": "O",
    "ddd": "0.3"
  },
  {
    "drug": "氯霉素注射液",
    "generic": "氯霉素",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "氯唑西林片",
    "generic": "氯唑西林",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "氯唑西林注射剂",
    "generic": "氯唑西林",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "麦迪霉素胶囊",
    "generic": "麦迪霉素",
    "route": "O",
    "ddd": "1.2"
  },
  {
    "drug": "注射用美罗培南",
    "generic": "美罗培南",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "美罗培南韦博巴坦注射剂",
    "generic": "美罗培南韦博巴坦",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "美洛西林注射剂",
    "generic": "美洛西林",
    "route": "P",
    "ddd": "6"
  },
  {
    "drug": "美他环素片",
    "generic": "美他环素",
    "route": "O",
    "ddd": "0.6"
  },
  {
    "drug": "米卡芬净注射剂",
    "generic": "米卡芬净",
    "route": "P",
    "ddd": "0.1"
  },
  {
    "drug": "米诺环素胶囊",
    "generic": "米诺环素",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "米诺环素片",
    "generic": "米诺环素",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "莫西沙星片",
    "generic": "莫西沙星",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "莫西沙星注射剂",
    "generic": "莫西沙星",
    "route": "P",
    "ddd": "0.4"
  },
  {
    "drug": "奈替米星注射剂",
    "generic": "奈替米星",
    "route": "P",
    "ddd": "0.35"
  },
  {
    "drug": "萘夫西林注射剂",
    "generic": "萘夫西林",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "黏菌素片（硫酸盐）",
    "generic": "多黏菌素E（黏菌素）",
    "route": "O",
    "ddd": "900万U"
  },
  {
    "drug": "黏菌素注射剂（硫酸盐）",
    "generic": "多黏菌素E（黏菌素）",
    "route": "P",
    "ddd": "900万U"
  },
  {
    "drug": "诺氟沙星（氟哌酸）胶囊",
    "generic": "诺氟沙星",
    "route": "O",
    "ddd": "0.8"
  },
  {
    "drug": "诺氟沙星（氟哌酸）片",
    "generic": "诺氟沙星",
    "route": "O",
    "ddd": "0.8"
  },
  {
    "drug": "帕尼培南倍他米隆注射剂",
    "generic": "帕尼培南倍他米隆",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "帕珠沙星注射剂",
    "generic": "帕珠沙星",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "哌拉西林舒巴坦注射剂",
    "generic": "哌拉西林舒巴坦",
    "route": "P",
    "ddd": "14"
  },
  {
    "drug": "哌拉西林他唑巴坦注射剂",
    "generic": "哌拉西林他唑巴坦",
    "route": "P",
    "ddd": "14"
  },
  {
    "drug": "哌拉西林注射剂",
    "generic": "哌拉西林",
    "route": "P",
    "ddd": "14"
  },
  {
    "drug": "普鲁卡因青霉素注射剂",
    "generic": "普鲁卡因青霉素",
    "route": "P",
    "ddd": "0.6"
  },
  {
    "drug": "青霉素V片",
    "generic": "青霉素V",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "青霉素注射剂",
    "generic": "青霉素",
    "route": "P",
    "ddd": "3.6"
  },
  {
    "drug": "庆大霉素注射剂",
    "generic": "庆大霉素",
    "route": "P",
    "ddd": "0.24"
  },
  {
    "drug": "塞克硝唑胶囊",
    "generic": "塞克硝唑",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "塞克硝唑片",
    "generic": "塞克硝唑",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "舒巴坦注射剂",
    "generic": "舒巴坦",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "四环素片",
    "generic": "四环素",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "羧苄西林注射剂",
    "generic": "羧苄西林",
    "route": "P",
    "ddd": "12"
  },
  {
    "drug": "特比萘芬片",
    "generic": "特比萘芬",
    "route": "O",
    "ddd": "0.25"
  },
  {
    "drug": "特地唑胺片",
    "generic": "特地唑胺",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "特地唑胺注射剂",
    "generic": "特地唑胺",
    "route": "P",
    "ddd": "0.2"
  },
  {
    "drug": "替加环素注射剂",
    "generic": "替加环素",
    "route": "P",
    "ddd": "0.1"
  },
  {
    "drug": "替卡西林克拉维酸注射剂",
    "generic": "替卡西林克拉维酸",
    "route": "P",
    "ddd": "15"
  },
  {
    "drug": "替卡西林注射剂",
    "generic": "替卡西林",
    "route": "P",
    "ddd": "15"
  },
  {
    "drug": "替考拉宁注射剂",
    "generic": "替考拉宁",
    "route": "P",
    "ddd": "0.4"
  },
  {
    "drug": "达巴万星注射剂",
    "generic": "达巴万星",
    "route": "P",
    "ddd": "1.5"
  },
  {
    "drug": "达福普丁奎奴普丁注射剂",
    "generic": "达福普丁奎奴普丁",
    "route": "P",
    "ddd": "1.5"
  },
  {
    "drug": "替硝唑胶囊",
    "generic": "替硝唑",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "替硝唑片",
    "generic": "替硝唑",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "替硝唑注射剂",
    "generic": "替硝唑",
    "route": "P",
    "ddd": "1.5"
  },
  {
    "drug": "头孢氨苄胶囊",
    "generic": "头孢氨苄",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "头孢氨苄颗粒剂",
    "generic": "头孢氨苄",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "头孢氨苄片",
    "generic": "头孢氨苄",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "头孢吡肟注射剂",
    "generic": "头孢吡肟",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢丙烯干混悬剂",
    "generic": "头孢丙烯",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢丙烯颗粒剂",
    "generic": "头孢丙烯",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢丙烯片",
    "generic": "头孢丙烯",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢泊肟酯干糖浆",
    "generic": "头孢泊肟酯",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢泊肟酯片",
    "generic": "头孢泊肟酯",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢布烯胶囊",
    "generic": "头孢布烯",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢地尼胶囊",
    "generic": "头孢地尼",
    "route": "O",
    "ddd": "0.6"
  },
  {
    "drug": "头孢地秦注射剂",
    "generic": "头孢地秦",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "头孢呋辛酯颗粒剂",
    "generic": "头孢呋辛",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "头孢呋辛酯片",
    "generic": "头孢呋辛",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "头孢呋辛注射剂",
    "generic": "头孢呋辛",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "头孢甲肟注射剂",
    "generic": "头孢甲肟",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "头孢卡品酯颗粒",
    "generic": "头孢卡品酯",
    "route": "O",
    "ddd": "0.45"
  },
  {
    "drug": "头孢克洛干混悬剂",
    "generic": "头孢克洛",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢克洛胶囊",
    "generic": "头孢克洛",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢克洛颗粒剂",
    "generic": "头孢克洛",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢克洛片",
    "generic": "头孢克洛",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢克肟干糖浆",
    "generic": "头孢克肟",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢克肟胶囊",
    "generic": "头孢克肟",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢拉定胶囊",
    "generic": "头孢拉定",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "头孢拉定注射剂",
    "generic": "头孢拉定",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "头孢美唑注射剂",
    "generic": "头孢美唑",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢孟多（头孢羟唑）注射剂",
    "generic": "头孢孟多",
    "route": "P",
    "ddd": "6"
  },
  {
    "drug": "头孢米诺注射剂",
    "generic": "头孢米诺",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢尼西注射剂",
    "generic": "头孢尼西",
    "route": "P",
    "ddd": "1"
  },
  {
    "drug": "头孢哌酮舒巴坦注射剂",
    "generic": "头孢哌酮舒巴坦",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢哌酮他唑巴坦注射剂",
    "generic": "头孢哌酮他唑巴坦",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢哌酮注射剂",
    "generic": "头孢哌酮",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢匹胺注射剂",
    "generic": "头孢匹胺",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "头孢匹罗注射剂",
    "generic": "头孢匹罗",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢洛林酯注射剂",
    "generic": "头孢洛林酯",
    "route": "P",
    "ddd": "1.2"
  },
  {
    "drug": "头孢羟氨苄胶囊",
    "generic": "头孢羟氨苄",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "头孢曲松舒巴坦注射剂",
    "generic": "头孢曲松舒巴坦",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "头孢曲松他唑巴坦注射剂",
    "generic": "头孢曲松他唑巴坦",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "头孢曲松注射剂",
    "generic": "头孢曲松",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "头孢噻啶注射剂",
    "generic": "头孢噻啶",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "头孢噻吩注射剂",
    "generic": "头孢噻吩",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢噻肟注射剂",
    "generic": "头孢噻肟",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢他啶阿维巴坦注射剂",
    "generic": "头孢他啶阿维巴坦",
    "route": "P",
    "ddd": "6"
  },
  {
    "drug": "头孢他啶他唑巴坦注射剂",
    "generic": "头孢他啶舒巴坦",
    "route": "P",
    "ddd": "6"
  },
  {
    "drug": "头孢他啶注射剂",
    "generic": "头孢他啶",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢他美酯胶囊",
    "generic": "头孢他美酯",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢他美酯片",
    "generic": "头孢他美酯",
    "route": "O",
    "ddd": "1"
  },
  {
    "drug": "头孢特仑酯片",
    "generic": "头孢特仑酯",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢替安注射剂",
    "generic": "头孢替安",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "头孢替唑注射剂",
    "generic": "头孢替唑",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "头孢托仑匹酯颗粒",
    "generic": "头孢托仑匹酯",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢托仑匹酯片",
    "generic": "头孢托仑匹酯",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢西丁注射剂",
    "generic": "头孢西丁",
    "route": "P",
    "ddd": "6"
  },
  {
    "drug": "头孢西酮注射剂",
    "generic": "头孢西酮",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "头孢唑啉注射剂",
    "generic": "头孢唑啉",
    "route": "P",
    "ddd": "3"
  },
  {
    "drug": "头孢唑肟注射剂",
    "generic": "头孢唑肟",
    "route": "P",
    "ddd": "4"
  },
  {
    "drug": "妥布霉素注射剂",
    "generic": "妥布霉素",
    "route": "P",
    "ddd": "0.24"
  },
  {
    "drug": "万古霉素注射剂",
    "generic": "万古霉素",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "西他沙星片",
    "generic": "西他沙星",
    "route": "O",
    "ddd": "0.1"
  },
  {
    "drug": "硝呋太尔片",
    "generic": "硝呋太尔",
    "route": "O",
    "ddd": "0.6"
  },
  {
    "drug": "新霉素片",
    "generic": "新霉素",
    "route": "O",
    "ddd": "5"
  },
  {
    "drug": "亚胺培南西司他丁注射剂",
    "generic": "亚胺培南西司他丁",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "亚胺培南西司他丁瑞来巴坦注射剂",
    "generic": "亚胺培南西司他丁瑞来巴坦",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "氧氟沙星片",
    "generic": "氧氟沙星",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "氧氟沙星注射剂",
    "generic": "氧氟沙星",
    "route": "P",
    "ddd": "0.4"
  },
  {
    "drug": "伊曲康唑胶囊",
    "generic": "伊曲康唑",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "伊曲康唑口服液",
    "generic": "伊曲康唑",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "伊曲康唑片",
    "generic": "伊曲康唑",
    "route": "O",
    "ddd": "0.2"
  },
  {
    "drug": "伊曲康唑注射剂",
    "generic": "伊曲康唑",
    "route": "P",
    "ddd": "0.2"
  },
  {
    "drug": "依诺沙星胶囊",
    "generic": "依诺沙星",
    "route": "O",
    "ddd": "0.8"
  },
  {
    "drug": "异帕米星注射剂",
    "generic": "异帕米星",
    "route": "P",
    "ddd": "0.4"
  },
  {
    "drug": "增效联磺片（联磺甲氧苄啶） 磺胺甲",
    "generic": "唑、磺胺嘧啶和甲氧苄啶",
    "route": "O",
    "ddd": "1.92"
  },
  {
    "drug": "制霉菌素片",
    "generic": "制霉菌素",
    "route": "O",
    "ddd": "150万U"
  },
  {
    "drug": "左氧氟沙星胶囊",
    "generic": "左氧氟沙星",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "左氧氟沙星片",
    "generic": "左氧氟沙星",
    "route": "O",
    "ddd": "0.5"
  },
  {
    "drug": "左氧氟沙星注射剂",
    "generic": "左氧氟沙星",
    "route": "P",
    "ddd": "0.5"
  },
  {
    "drug": "洛美沙星胶囊",
    "generic": "洛美沙星",
    "route": "O",
    "ddd": "0.4"
  },
  {
    "drug": "头孢曲松钠舒巴坦钠注射剂",
    "generic": "头孢曲松舒巴坦",
    "route": "P",
    "ddd": "2"
  },
  {
    "drug": "妥舒沙星片",
    "generic": "妥舒沙星",
    "route": "O",
    "ddd": "0.45"
  },
  {
    "drug": "妥舒沙星胶囊",
    "generic": "妥舒沙星",
    "route": "O",
    "ddd": "0.45"
  },
  {
    "drug": "螺旋霉素胶囊",
    "generic": "螺旋霉素",
    "route": "O",
    "ddd": "3"
  },
  {
    "drug": "舒他西林片",
    "generic": "舒他西林",
    "route": "O",
    "ddd": "2"
  },
  {
    "drug": "注射用头孢比罗酯钠",
    "generic": "头孢比罗酯",
    "route": "P",
    "ddd": "1.5"
  },
  {
    "drug": "奥特康唑胶囊",
    "generic": "奥特康唑",
    "route": "O",
    "ddd": "0.021"
  },
  {
    "drug": "注射用头孢洛生他唑巴坦钠",
    "generic": "头孢洛生他唑巴坦",
    "route": "P",
    "ddd": "3"
  }
];