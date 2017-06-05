const data = {
    region: 'REG002	',
    area: 'ARE003',
    "branchcode": '204',
    "branchname": 'สาขาสินเชื่อเพื่อรายย่อยระยอง',
    "destination_addresses": [
        "Soi Kabin Buri Industry Zone 14, Tambon Nong Ki, Amphoe Kabin Buri, Chang Wat Prachin Buri 25110, Thailand",
        "3627 Tambon Muang Kao, Amphoe Kabin Buri, Chang Wat Prachin Buri 25240, Thailand",
        "11.6680759,102.5642261",
        "Soi Ruam Chai 1, Tambon Tha Bunmi, Amphoe Ko Chan, Chang Wat Chon Buri 20240, Thailand",
        "Soi Sao., Tambon Ko Chang, Amphoe Ko Chang, Chang Wat Trat 23170, Thailand",
        "13.1499153,100.8084675",
        "Unnamed Road, Tambon Kaeng Hang Maeo, Amphoe Kaeng Hang Maeo, Chang Wat Chanthaburi 22160, Thailand",
        "71 Thetsaban 1, Tambon Thang Kwian, Amphoe Klaeng, Chang Wat Rayong 21110, Thailand",
        "Chaloem Burapha Chonlathit Rd, Tambon Pak Nam Krasae, Amphoe Klaeng, Chang Wat Rayong 21170, Thailand",
        "Unnamed Road, Tambon Chakphong, Amphoe Klaeng, Chang Wat Rayong 21190, Thailand",
        "71 Thetsaban 1, Tambon Thang Kwian, Amphoe Klaeng, Chang Wat Rayong 21110, Thailand",
        "78 Thanon Thetsaban 4, Tambon Khlung, Amphoe Khlung, Chang Wat Chanthaburi 22110, Thailand",
        "Unnamed Road, Tambon Patthawi, Amphoe Makham, Chang Wat Chanthaburi 22150, Thailand",
        "Unnamed Road, Tambon Pluang, Amphoe Khao Khitchakut, Chang Wat Chanthaburi 22210, Thailand",
        "117 Rd Suwannason, Amphoe Mueang Sa Kaeo, Chang Wat Sa Kaeo 27000, Thailand",
        "Unnamed Road, Tambon Pwa, Amphoe Kaeng Hang Maeo, Chang Wat Chanthaburi 22160, Thailand",
        "Unnamed Road, Tambon Khao Saming, Amphoe Khao Saming, Chang Wat Trat 23130, Thailand",
        "Unnamed Road, Tambon Khao Saming, Amphoe Khao Saming, Chang Wat Trat 23130, Thailand",
        "Unnamed Road, Tambon Khlong Khuean, Amphoe Khlong Khuean, Chang Wat Chachoengsao 24000, Thailand",
        "Unnamed Road, Tambon Khlong Khuean, Amphoe Khlong Khuean, Chang Wat Chachoengsao 24000, Thailand",
        "Unnamed Road, Tambon Khlong Hat, Amphoe Khlong Hat, Chang Wat Sa Kaeo 27260, Thailand",
        "Sukhumvit Rd, Tambon Khlong Yai, Amphoe Khlong Yai, Chang Wat Trat 23110, Thailand",
        "98 ตำบล โคกสูง Tambon Khok Sung, Amphoe Khok Sung, Chang Wat Sa Kaeo 27120, Thailand",
        "RO Pho Cho Sa Kaeo 3090 Rd, Tambon Nong Muang, Amphoe Khok Sung, Chang Wat Sa Kaeo 27180, Thailand",
        "Unnamed Road, Tambon Thap Rat, Amphoe Ta Phraya, Chang Wat Sa Kaeo 27180, Thailand",
        "Unnamed Road, Tambon Tha Takiap, Amphoe Tha Takiap, Chang Wat Chachoengsao 24160, Thailand",
        "Soi Nong Bua 3, Tambon Khao Baisi, Amphoe Tha Mai, Chang Wat Chanthaburi 22120, Thailand",
        "3407, Tambon Thung Bencha, Amphoe Tha Mai, Chang Wat Chanthaburi 22170, Thailand",
        "Unnamed Road, Tambon Na Di, Amphoe Na Di, Chang Wat Prachin Buri 25220, Thailand",
        "Unnamed Road, Tambon Na Yai Am, Amphoe Na Yai Am, Chang Wat Chanthaburi 22160, Thailand",
        "Unnamed Road, Tambon Na Yai Am, Amphoe Na Yai Am, Chang Wat Chanthaburi 22160, Thailand",
        "Unnamed Road, Tambon Nikhom Phatthana, Amphoe Nikhom Phatthana, Chang Wat Rayong 21180, Thailand",
        "Unnamed Road, Tambon Bo Thong, Amphoe Bo Thong, Chang Wat Chon Buri 20270, Thailand",
        "Unnamed Road, Tambon Bo Phloi, Amphoe Bo Rai, Chang Wat Trat 23140, Thailand",
        "Soi Bang Khla-Plaeng Yao, Tambon Bang Khla, Amphoe Bang Khla, Chang Wat Chachoengsao 24110, Thailand",
        "3200, Tambon Bang Khwan, Amphoe Mueang Chachoengsao, Chang Wat Chachoengsao 24000, Thailand",
        "Unnamed Road, Tambon Monthong, Amphoe Bang Nam Priao, Chang Wat Chachoengsao 24150, Thailand",
        "Unnamed Road, Tambon Don Chimphli, Amphoe Bang Nam Priao, Chang Wat Chachoengsao 24170, Thailand",
        "Sukhumvit Rd, Tambon Khlong Dan, Amphoe Bang Bo, Chang Wat Samut Prakan 10550, Thailand",
        "Soi Mu Ban Garden City Polo, Tambon Bang Bo, Amphoe Bang Bo, Chang Wat Samut Prakan 10560, Thailand",
        "Sukhumvit Rd, Tambon Bang Pakong, Amphoe Bang Pakong, Chang Wat Chachoengsao 24130, Thailand",
        "Unnamed Road, Tambon Bang Samak, Amphoe Bang Pakong, Chang Wat Chachoengsao 24180, Thailand",
        "10540 11/69 Moo 2 ซอย หนามเเคง-บางพลี 9 Tambon Bang Kaeo, Amphoe Bang Phli, Chang Wat Samut Prakan 10540, Thailand",
        "Thanon Pornprapanimit, Tambon Pong, Amphoe Bang Lamung, Chang Wat Chon Buri 20150, Thailand",
        "Unnamed Road, Tambon Bang Sao Thong, Amphoe Bang Sao Thong, Chang Wat Samut Prakan 10540, Thailand",
        "รย.6031 Tambon Ban Khai, Amphoe Ban Khai, Chang Wat Rayong 21120, Thailand",
        "Soi Noen Sare 3, Tambon Ban Chang, Amphoe Ban Chang, Chang Wat Rayong 21130, Thailand",
        "Rd Suwannason, Amphoe Ban Na, Chang Wat Nakhon Nayok 26110, Thailand",
        "Thanon RO Pho Cho Chon Buri 3196, Tambon Ban Bueng, Amphoe Ban Bueng, Chang Wat Chon Buri 20170, Thailand",
        "Unnamed Road, Tambon Khlong Kiu, Amphoe Ban Bueng, Chang Wat Chon Buri 20220, Thailand",
        "Unnamed Road, Tambon Ban Pho, Amphoe Ban Pho, Chang Wat Chachoengsao 24140, Thailand",
        "Unnamed Road, Tambon Ban Sang, Amphoe Ban Sang, Chang Wat Prachin Buri 25150, Thailand",
        "Unnamed Road, Tambon Prachantakham, Amphoe Prachantakham, Chang Wat Prachin Buri 25130, Thailand",
        "Soi Samranrat-Map Sai, Tambon Pluak Daeng, Amphoe Pluak Daeng, Chang Wat Rayong 21140, Thailand",
        "Unnamed Road, Amphoe Pak Phli, Chang Wat Nakhon Nayok 26130, Thailand",
        "Soi Bang Khla-Plaeng Yao 1, Tambon Plaeng Yao, Amphoe Plaeng Yao, Chang Wat Chachoengsao 24190, Thailand",
        "Unnamed Road, Cambodia",
        "Soi Mu Ban Uea Athon Chachoengsao, Tambon Phanom Sarakham, Amphoe Phanom Sarakham, Chang Wat Chachoengsao 24120, Thailand",
        "3 Sri Kunchaon, Tambon Phanat Nikhom, Amphoe Phanat Nikhom, Chang Wat Chon Buri 20140, Thailand",
        "Soi Sa-at Ta, Tambon Sam Rong Klang, Amphoe Phra Pradaeng, Chang Wat Samut Prakan 10130, Thailand",
        "Wat Yai, Tambon Nai Khlong Bang Pla Kot, Amphoe Phra Samut Chedi, Chang Wat Samut Prakan 10290, Thailand",
        "Soi Mu Ban Khrongkan Ban Uea Athon Chon Buri, Tambon Na Pradu, Amphoe Phan Thong, Chang Wat Chon Buri 20160, Thailand",
        "Unnamed Road, Tambon Makham, Amphoe Makham, Chang Wat Chanthaburi 22150, Thailand",
        "Thanon Leab Noen, Tambon Wat Mai, Amphoe Mueang Chanthaburi, Chang Wat Chanthaburi 22000, Thailand",
        "Suwinthawong Rd, Tambon Bang Tin Pet, Amphoe Mueang Chachoengsao, Chang Wat Chachoengsao 24000, Thailand",
        "Thanon By Pass Chon Buri, Tambon Na Pa, Amphoe Mueang Chon Buri, Chang Wat Chon Buri 20000, Thailand",
        "88/2 Thanon Tedsaban Pattana, Tambon Saen Suk, Amphoe Mueang Chon Buri, Chang Wat Chon Buri 20130, Thailand",
        "Soi Rat Ni yom, Tambon Bang Phra, Amphoe Mueang Trat, Chang Wat Trat 23000, Thailand",
        "Udom Sap Soi 7, Amphoe Mueang Nakhon Nayok, Chang Wat Nakhon Nayok 26000, Thailand",
        "Thanon Prachin-Takham, Tambon Na Muang, Amphoe Mueang Prachin Buri, Chang Wat Prachin Buri 25000, Thailand",
        "Rural Rd Prachin Buri 3008, Tambon Mai Khet, Amphoe Mueang Prachin Buri, Chang Wat Prachin Buri 25230, Thailand",
        "1/215 ม.3 Tambon Taphong, Amphoe Mueang Rayong, Chang Wat Rayong 21000, Thailand",
        "Saphan Yao Rd, Tambon Sam Nak Thong, Amphoe Mueang Rayong, Chang Wat Rayong 21100, Thailand",
        "Ruam Phatthana, Amphoe Mueang Rayong, Chang Wat Rayong 21150, Thailand",
        "Unnamed Road, Tambon Klaeng, Amphoe Mueang Rayong, Chang Wat Rayong 21160, Thailand",
        "Soi Udomdej 7 Right, Tambon Bang Muang Mai, Amphoe Mueang Samut Prakan, Chang Wat Samut Prakan 10270, Thailand",
        "Soi Mu Ban Piti Villa 4, Tambon Phraeksa, Amphoe Mueang Samut Prakan, Chang Wat Samut Prakan 10280, Thailand",
        "117 Rd Suwannason, Amphoe Mueang Sa Kaeo, Chang Wat Sa Kaeo 27000, Thailand",
        "Unnamed Road, Tambon Bang Kha, Amphoe Ratchasan, Chang Wat Chachoengsao 24120, Thailand",
        "3471, Tambon Chum Saeng, Amphoe Wang Chan, Chang Wat Rayong 21210, Thailand",
        "Unnamed Road, Tambon Ta Lang Nai, Amphoe Wang Nam Yen, Chang Wat Sa Kaeo 27210, Thailand",
        "สก.3049 Tambon Wang Sombun, Amphoe Wang Sombun, Chang Wat Sa Kaeo 27250, Thailand",
        "Unnamed Road, Tambon Watthana Nakhon, Amphoe Watthana Nakhon, Chang Wat Sa Kaeo 27160, Thailand",
        "Rural Rd, Tambon Hua Wa, Amphoe Si Maha Phot, Chang Wat Prachin Buri 25140, Thailand",
        "PBR.3011, Tambon Khok Thai, Amphoe Si Mahosot, Chang Wat Prachin Buri 25190, Thailand",
        "9 Soi ๋Churint and Mitr, Amphoe Si Racha, Chang Wat Chon Buri 20110, Thailand",
        "Unnamed Road, Tambon Bueng, Amphoe Si Racha, Chang Wat Chon Buri 20230, Thailand",
        "Unnamed Road, Tambon Tha Takiap, Amphoe Tha Takiap, Chang Wat Chachoengsao 24160, Thailand",
        "3391, Tambon Sai Khao, Amphoe Soi Dao, Chang Wat Chanthaburi 22180, Thailand",
        "65/5 บ่อนไก่ 9 Tambon Sattahip, Amphoe Sattahip, Chang Wat Chon Buri 20180, Thailand",
        "Ban Rai Suk Bot 1, Tambon Na Chom Thian, Amphoe Sattahip, Chang Wat Chon Buri 20250, Thailand",
        "Nhong Yai, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150, Thailand",
        "Hwy 3156, Tambon Laem Ngop, Amphoe Laem Ngop, Chang Wat Trat 23120, Thailand",
        "ถนนเขาแหลมสิงห์ Tambon Bang Kachai, Amphoe Laem Sing, Chang Wat Chanthaburi, Thailand",
        "3149, Tambon Pak Nam Laem Sing, Amphoe Laem Sing, Chang Wat Chanthaburi 22130, Thailand",
        "3149, Tambon Pak Nam Laem Sing, Amphoe Laem Sing, Chang Wat Chanthaburi 22130, Thailand",
        "Unnamed Road, Tambon Ongkharak, Amphoe Ongkharak, Chang Wat Nakhon Nayok 26120, Thailand",
        "Thana Way St, Tambon Ban Dan, Amphoe Aranyaprathet, Chang Wat Sa Kaeo 27120, Thailand"
    ],
    "origin_addresses": [
        "129 Sukhumvit Rd, Tambon Tha Pradu, Amphoe Mueang Rayong, Chang Wat Rayong 21000, Thailand"
    ],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "205 km",
                        "value": 204619
                    },
                    "duration": {
                        "text": "3 hours 0 mins",
                        "value": 10774
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "188 km",
                        "value": 187724
                    },
                    "duration": {
                        "text": "2 hours 41 mins",
                        "value": 9683
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "95.7 km",
                        "value": 95720
                    },
                    "duration": {
                        "text": "1 hour 31 mins",
                        "value": 5432
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "210 km",
                        "value": 210051
                    },
                    "duration": {
                        "text": "4 hours 24 mins",
                        "value": 15823
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "97.8 km",
                        "value": 97780
                    },
                    "duration": {
                        "text": "1 hour 36 mins",
                        "value": 5767
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "48.5 km",
                        "value": 48506
                    },
                    "duration": {
                        "text": "45 mins",
                        "value": 2695
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "65.2 km",
                        "value": 65213
                    },
                    "duration": {
                        "text": "1 hour 3 mins",
                        "value": 3754
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "35.0 km",
                        "value": 35005
                    },
                    "duration": {
                        "text": "36 mins",
                        "value": 2148
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "48.5 km",
                        "value": 48506
                    },
                    "duration": {
                        "text": "45 mins",
                        "value": 2695
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "139 km",
                        "value": 138849
                    },
                    "duration": {
                        "text": "2 hours 5 mins",
                        "value": 7487
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "140 km",
                        "value": 140194
                    },
                    "duration": {
                        "text": "2 hours 8 mins",
                        "value": 7698
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "122 km",
                        "value": 121880
                    },
                    "duration": {
                        "text": "2 hours 16 mins",
                        "value": 8145
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "212 km",
                        "value": 212343
                    },
                    "duration": {
                        "text": "2 hours 59 mins",
                        "value": 10728
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "77.1 km",
                        "value": 77144
                    },
                    "duration": {
                        "text": "1 hour 25 mins",
                        "value": 5100
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "168 km",
                        "value": 167796
                    },
                    "duration": {
                        "text": "2 hours 25 mins",
                        "value": 8717
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "175 km",
                        "value": 174914
                    },
                    "duration": {
                        "text": "2 hours 30 mins",
                        "value": 9018
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "156 km",
                        "value": 156054
                    },
                    "duration": {
                        "text": "2 hours 19 mins",
                        "value": 8345
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "156 km",
                        "value": 156054
                    },
                    "duration": {
                        "text": "2 hours 19 mins",
                        "value": 8345
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "200 km",
                        "value": 200135
                    },
                    "duration": {
                        "text": "3 hours 10 mins",
                        "value": 11427
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "258 km",
                        "value": 258205
                    },
                    "duration": {
                        "text": "3 hours 41 mins",
                        "value": 13277
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "286 km",
                        "value": 285870
                    },
                    "duration": {
                        "text": "3 hours 54 mins",
                        "value": 14015
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "277 km",
                        "value": 276626
                    },
                    "duration": {
                        "text": "3 hours 46 mins",
                        "value": 13585
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "318 km",
                        "value": 318053
                    },
                    "duration": {
                        "text": "4 hours 42 mins",
                        "value": 16930
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "141 km",
                        "value": 140702
                    },
                    "duration": {
                        "text": "2 hours 26 mins",
                        "value": 8789
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "97.1 km",
                        "value": 97126
                    },
                    "duration": {
                        "text": "1 hour 28 mins",
                        "value": 5301
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "91.5 km",
                        "value": 91535
                    },
                    "duration": {
                        "text": "1 hour 25 mins",
                        "value": 5088
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "218 km",
                        "value": 217790
                    },
                    "duration": {
                        "text": "3 hours 25 mins",
                        "value": 12293
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "72.2 km",
                        "value": 72185
                    },
                    "duration": {
                        "text": "1 hour 9 mins",
                        "value": 4122
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "72.2 km",
                        "value": 72185
                    },
                    "duration": {
                        "text": "1 hour 9 mins",
                        "value": 4122
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "25.1 km",
                        "value": 25107
                    },
                    "duration": {
                        "text": "31 mins",
                        "value": 1851
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "86.3 km",
                        "value": 86264
                    },
                    "duration": {
                        "text": "1 hour 33 mins",
                        "value": 5550
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "197 km",
                        "value": 197185
                    },
                    "duration": {
                        "text": "2 hours 54 mins",
                        "value": 10428
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "132 km",
                        "value": 131950
                    },
                    "duration": {
                        "text": "2 hours 1 min",
                        "value": 7281
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "149 km",
                        "value": 148559
                    },
                    "duration": {
                        "text": "2 hours 8 mins",
                        "value": 7697
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "158 km",
                        "value": 158100
                    },
                    "duration": {
                        "text": "2 hours 20 mins",
                        "value": 8397
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "170 km",
                        "value": 170086
                    },
                    "duration": {
                        "text": "2 hours 31 mins",
                        "value": 9069
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "134 km",
                        "value": 134001
                    },
                    "duration": {
                        "text": "2 hours 3 mins",
                        "value": 7361
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "140 km",
                        "value": 140281
                    },
                    "duration": {
                        "text": "2 hours 5 mins",
                        "value": 7510
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "115 km",
                        "value": 114933
                    },
                    "duration": {
                        "text": "1 hour 41 mins",
                        "value": 6042
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "127 km",
                        "value": 127212
                    },
                    "duration": {
                        "text": "1 hour 50 mins",
                        "value": 6600
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "161 km",
                        "value": 160694
                    },
                    "duration": {
                        "text": "2 hours 17 mins",
                        "value": 8191
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "42.2 km",
                        "value": 42173
                    },
                    "duration": {
                        "text": "43 mins",
                        "value": 2595
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "143 km",
                        "value": 142818
                    },
                    "duration": {
                        "text": "2 hours 2 mins",
                        "value": 7327
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "12.9 km",
                        "value": 12889
                    },
                    "duration": {
                        "text": "19 mins",
                        "value": 1145
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "27.8 km",
                        "value": 27843
                    },
                    "duration": {
                        "text": "41 mins",
                        "value": 2486
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "217 km",
                        "value": 217117
                    },
                    "duration": {
                        "text": "3 hours 12 mins",
                        "value": 11528
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "80.8 km",
                        "value": 80769
                    },
                    "duration": {
                        "text": "1 hour 18 mins",
                        "value": 4685
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "73.9 km",
                        "value": 73885
                    },
                    "duration": {
                        "text": "1 hour 18 mins",
                        "value": 4700
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "137 km",
                        "value": 136595
                    },
                    "duration": {
                        "text": "1 hour 58 mins",
                        "value": 7050
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "177 km",
                        "value": 176820
                    },
                    "duration": {
                        "text": "2 hours 39 mins",
                        "value": 9533
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "188 km",
                        "value": 187723
                    },
                    "duration": {
                        "text": "2 hours 48 mins",
                        "value": 10073
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "44.2 km",
                        "value": 44227
                    },
                    "duration": {
                        "text": "51 mins",
                        "value": 3059
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "202 km",
                        "value": 201978
                    },
                    "duration": {
                        "text": "3 hours 6 mins",
                        "value": 11171
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "119 km",
                        "value": 118925
                    },
                    "duration": {
                        "text": "1 hour 49 mins",
                        "value": 6549
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "182 km",
                        "value": 181929
                    },
                    "duration": {
                        "text": "2 hours 52 mins",
                        "value": 10319
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "143 km",
                        "value": 143031
                    },
                    "duration": {
                        "text": "2 hours 9 mins",
                        "value": 7723
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "99.9 km",
                        "value": 99868
                    },
                    "duration": {
                        "text": "1 hour 34 mins",
                        "value": 5658
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "174 km",
                        "value": 174375
                    },
                    "duration": {
                        "text": "2 hours 24 mins",
                        "value": 8630
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "186 km",
                        "value": 186393
                    },
                    "duration": {
                        "text": "2 hours 39 mins",
                        "value": 9534
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "111 km",
                        "value": 110712
                    },
                    "duration": {
                        "text": "1 hour 45 mins",
                        "value": 6327
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "121 km",
                        "value": 120799
                    },
                    "duration": {
                        "text": "1 hour 50 mins",
                        "value": 6600
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "111 km",
                        "value": 110736
                    },
                    "duration": {
                        "text": "1 hour 44 mins",
                        "value": 6245
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "133 km",
                        "value": 133178
                    },
                    "duration": {
                        "text": "1 hour 52 mins",
                        "value": 6718
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "97.1 km",
                        "value": 97069
                    },
                    "duration": {
                        "text": "1 hour 24 mins",
                        "value": 5069
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "92.3 km",
                        "value": 92291
                    },
                    "duration": {
                        "text": "1 hour 24 mins",
                        "value": 5060
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "181 km",
                        "value": 180575
                    },
                    "duration": {
                        "text": "2 hours 38 mins",
                        "value": 9461
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "207 km",
                        "value": 207321
                    },
                    "duration": {
                        "text": "3 hours 5 mins",
                        "value": 11103
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "182 km",
                        "value": 182204
                    },
                    "duration": {
                        "text": "2 hours 42 mins",
                        "value": 9708
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "192 km",
                        "value": 191612
                    },
                    "duration": {
                        "text": "2 hours 50 mins",
                        "value": 10201
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "14.8 km",
                        "value": 14804
                    },
                    "duration": {
                        "text": "23 mins",
                        "value": 1382
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "28.4 km",
                        "value": 28392
                    },
                    "duration": {
                        "text": "36 mins",
                        "value": 2161
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "13.8 km",
                        "value": 13786
                    },
                    "duration": {
                        "text": "25 mins",
                        "value": 1483
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "22.0 km",
                        "value": 22031
                    },
                    "duration": {
                        "text": "24 mins",
                        "value": 1465
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "166 km",
                        "value": 165903
                    },
                    "duration": {
                        "text": "2 hours 18 mins",
                        "value": 8274
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "162 km",
                        "value": 161723
                    },
                    "duration": {
                        "text": "2 hours 21 mins",
                        "value": 8436
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "212 km",
                        "value": 212343
                    },
                    "duration": {
                        "text": "2 hours 59 mins",
                        "value": 10728
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "148 km",
                        "value": 148266
                    },
                    "duration": {
                        "text": "2 hours 14 mins",
                        "value": 8013
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "45.2 km",
                        "value": 45213
                    },
                    "duration": {
                        "text": "48 mins",
                        "value": 2869
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "183 km",
                        "value": 183352
                    },
                    "duration": {
                        "text": "2 hours 59 mins",
                        "value": 10731
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "215 km",
                        "value": 215166
                    },
                    "duration": {
                        "text": "3 hours 13 mins",
                        "value": 11593
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "242 km",
                        "value": 241920
                    },
                    "duration": {
                        "text": "3 hours 19 mins",
                        "value": 11965
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "166 km",
                        "value": 166296
                    },
                    "duration": {
                        "text": "2 hours 28 mins",
                        "value": 8900
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "158 km",
                        "value": 158267
                    },
                    "duration": {
                        "text": "2 hours 19 mins",
                        "value": 8348
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "72.4 km",
                        "value": 72447
                    },
                    "duration": {
                        "text": "1 hour 14 mins",
                        "value": 4423
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "63.5 km",
                        "value": 63453
                    },
                    "duration": {
                        "text": "1 hour 5 mins",
                        "value": 3920
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "141 km",
                        "value": 140702
                    },
                    "duration": {
                        "text": "2 hours 26 mins",
                        "value": 8789
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "182 km",
                        "value": 181794
                    },
                    "duration": {
                        "text": "2 hours 46 mins",
                        "value": 9951
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "47.7 km",
                        "value": 47714
                    },
                    "duration": {
                        "text": "1 hour 7 mins",
                        "value": 4006
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "58.8 km",
                        "value": 58758
                    },
                    "duration": {
                        "text": "1 hour 8 mins",
                        "value": 4075
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "56.9 km",
                        "value": 56869
                    },
                    "duration": {
                        "text": "58 mins",
                        "value": 3478
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "187 km",
                        "value": 187340
                    },
                    "duration": {
                        "text": "2 hours 46 mins",
                        "value": 9930
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "119 km",
                        "value": 119346
                    },
                    "duration": {
                        "text": "1 hour 52 mins",
                        "value": 6748
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "125 km",
                        "value": 124538
                    },
                    "duration": {
                        "text": "1 hour 58 mins",
                        "value": 7107
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "125 km",
                        "value": 124538
                    },
                    "duration": {
                        "text": "1 hour 58 mins",
                        "value": 7107
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "194 km",
                        "value": 193558
                    },
                    "duration": {
                        "text": "2 hours 57 mins",
                        "value": 10596
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "261 km",
                        "value": 260546
                    },
                    "duration": {
                        "text": "3 hours 31 mins",
                        "value": 12677
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}