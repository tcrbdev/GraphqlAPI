const data = {
    region: 'REG002	',
    area: 'ARE003',
    "branchcode": '233',
    "branchname": 'สาขาสินเชื่อเพื่อรายย่อยจันทบุรี',
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
        "Soi Maharaj, Tambon Wat Mai, Amphoe Mueang Chanthaburi, Chang Wat Chanthaburi 22000, Thailand"
    ],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "215 km",
                        "value": 215125
                    },
                    "duration": {
                        "text": "3 hours 18 mins",
                        "value": 11892
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "199 km",
                        "value": 198676
                    },
                    "duration": {
                        "text": "3 hours 1 min",
                        "value": 10834
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "159 km",
                        "value": 159379
                    },
                    "duration": {
                        "text": "2 hours 20 mins",
                        "value": 8388
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "97.4 km",
                        "value": 97398
                    },
                    "duration": {
                        "text": "2 hours 47 mins",
                        "value": 10039
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "62.8 km",
                        "value": 62756
                    },
                    "duration": {
                        "text": "1 hour 7 mins",
                        "value": 4026
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "64.8 km",
                        "value": 64833
                    },
                    "duration": {
                        "text": "1 hour 5 mins",
                        "value": 3876
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "62.1 km",
                        "value": 62110
                    },
                    "duration": {
                        "text": "59 mins",
                        "value": 3531
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "83.8 km",
                        "value": 83846
                    },
                    "duration": {
                        "text": "1 hour 20 mins",
                        "value": 4826
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "64.8 km",
                        "value": 64833
                    },
                    "duration": {
                        "text": "1 hour 5 mins",
                        "value": 3876
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "26.2 km",
                        "value": 26195
                    },
                    "duration": {
                        "text": "28 mins",
                        "value": 1702
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "34.2 km",
                        "value": 34211
                    },
                    "duration": {
                        "text": "40 mins",
                        "value": 2411
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "34.4 km",
                        "value": 34438
                    },
                    "duration": {
                        "text": "1 hour 0 mins",
                        "value": 3619
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "158 km",
                        "value": 158331
                    },
                    "duration": {
                        "text": "2 hours 28 mins",
                        "value": 8887
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "73.2 km",
                        "value": 73236
                    },
                    "duration": {
                        "text": "1 hour 19 mins",
                        "value": 4714
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "55.1 km",
                        "value": 55143
                    },
                    "duration": {
                        "text": "49 mins",
                        "value": 2933
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "62.3 km",
                        "value": 62261
                    },
                    "duration": {
                        "text": "54 mins",
                        "value": 3234
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "210 km",
                        "value": 209720
                    },
                    "duration": {
                        "text": "3 hours 11 mins",
                        "value": 11431
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "210 km",
                        "value": 209720
                    },
                    "duration": {
                        "text": "3 hours 11 mins",
                        "value": 11431
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "114 km",
                        "value": 113576
                    },
                    "duration": {
                        "text": "1 hour 48 mins",
                        "value": 6481
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "146 km",
                        "value": 145552
                    },
                    "duration": {
                        "text": "2 hours 5 mins",
                        "value": 7492
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "196 km",
                        "value": 196172
                    },
                    "duration": {
                        "text": "2 hours 56 mins",
                        "value": 10537
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "187 km",
                        "value": 186928
                    },
                    "duration": {
                        "text": "2 hours 48 mins",
                        "value": 10108
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "228 km",
                        "value": 228368
                    },
                    "duration": {
                        "text": "3 hours 45 mins",
                        "value": 13476
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "161 km",
                        "value": 161401
                    },
                    "duration": {
                        "text": "2 hours 39 mins",
                        "value": 9513
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "18.9 km",
                        "value": 18923
                    },
                    "duration": {
                        "text": "25 mins",
                        "value": 1471
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "35.4 km",
                        "value": 35432
                    },
                    "duration": {
                        "text": "39 mins",
                        "value": 2322
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "228 km",
                        "value": 228297
                    },
                    "duration": {
                        "text": "3 hours 44 mins",
                        "value": 13410
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "43.7 km",
                        "value": 43709
                    },
                    "duration": {
                        "text": "46 mins",
                        "value": 2761
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "43.7 km",
                        "value": 43709
                    },
                    "duration": {
                        "text": "46 mins",
                        "value": 2761
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "137 km",
                        "value": 136808
                    },
                    "duration": {
                        "text": "2 hours 10 mins",
                        "value": 7797
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "130 km",
                        "value": 129501
                    },
                    "duration": {
                        "text": "2 hours 8 mins",
                        "value": 7682
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "84.5 km",
                        "value": 84532
                    },
                    "duration": {
                        "text": "1 hour 17 mins",
                        "value": 4643
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "196 km",
                        "value": 195608
                    },
                    "duration": {
                        "text": "2 hours 51 mins",
                        "value": 10236
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "200 km",
                        "value": 199643
                    },
                    "duration": {
                        "text": "3 hours 8 mins",
                        "value": 11259
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "230 km",
                        "value": 229953
                    },
                    "duration": {
                        "text": "3 hours 22 mins",
                        "value": 12145
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "242 km",
                        "value": 241939
                    },
                    "duration": {
                        "text": "3 hours 34 mins",
                        "value": 12816
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "207 km",
                        "value": 206601
                    },
                    "duration": {
                        "text": "3 hours 8 mins",
                        "value": 11280
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "213 km",
                        "value": 212881
                    },
                    "duration": {
                        "text": "3 hours 10 mins",
                        "value": 11429
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "188 km",
                        "value": 187533
                    },
                    "duration": {
                        "text": "2 hours 46 mins",
                        "value": 9961
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "207 km",
                        "value": 207235
                    },
                    "duration": {
                        "text": "2 hours 54 mins",
                        "value": 10410
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "233 km",
                        "value": 233293
                    },
                    "duration": {
                        "text": "3 hours 22 mins",
                        "value": 12110
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "154 km",
                        "value": 153874
                    },
                    "duration": {
                        "text": "2 hours 22 mins",
                        "value": 8540
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "215 km",
                        "value": 215418
                    },
                    "duration": {
                        "text": "3 hours 7 mins",
                        "value": 11246
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "120 km",
                        "value": 119615
                    },
                    "duration": {
                        "text": "1 hour 53 mins",
                        "value": 6752
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "143 km",
                        "value": 143323
                    },
                    "duration": {
                        "text": "2 hours 23 mins",
                        "value": 8573
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "282 km",
                        "value": 281692
                    },
                    "duration": {
                        "text": "4 hours 8 mins",
                        "value": 14855
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "151 km",
                        "value": 151161
                    },
                    "duration": {
                        "text": "2 hours 9 mins",
                        "value": 7769
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "148 km",
                        "value": 148441
                    },
                    "duration": {
                        "text": "2 hours 13 mins",
                        "value": 7966
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "185 km",
                        "value": 185481
                    },
                    "duration": {
                        "text": "2 hours 51 mins",
                        "value": 10242
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "240 km",
                        "value": 240478
                    },
                    "duration": {
                        "text": "3 hours 28 mins",
                        "value": 12489
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "231 km",
                        "value": 230567
                    },
                    "duration": {
                        "text": "3 hours 27 mins",
                        "value": 12411
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "143 km",
                        "value": 143492
                    },
                    "duration": {
                        "text": "2 hours 6 mins",
                        "value": 7570
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "266 km",
                        "value": 265637
                    },
                    "duration": {
                        "text": "3 hours 55 mins",
                        "value": 14126
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "183 km",
                        "value": 182584
                    },
                    "duration": {
                        "text": "2 hours 38 mins",
                        "value": 9504
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "75.9 km",
                        "value": 75946
                    },
                    "duration": {
                        "text": "1 hour 24 mins",
                        "value": 5032
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "207 km",
                        "value": 206689
                    },
                    "duration": {
                        "text": "2 hours 58 mins",
                        "value": 10678
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "164 km",
                        "value": 163527
                    },
                    "duration": {
                        "text": "2 hours 24 mins",
                        "value": 8614
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "247 km",
                        "value": 246974
                    },
                    "duration": {
                        "text": "3 hours 29 mins",
                        "value": 12549
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "259 km",
                        "value": 258993
                    },
                    "duration": {
                        "text": "3 hours 44 mins",
                        "value": 13453
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "174 km",
                        "value": 174369
                    },
                    "duration": {
                        "text": "2 hours 39 mins",
                        "value": 9533
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "14.8 km",
                        "value": 14816
                    },
                    "duration": {
                        "text": "22 mins",
                        "value": 1313
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "2.2 km",
                        "value": 2151
                    },
                    "duration": {
                        "text": "7 mins",
                        "value": 430
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "193 km",
                        "value": 193436
                    },
                    "duration": {
                        "text": "2 hours 54 mins",
                        "value": 10431
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "170 km",
                        "value": 169669
                    },
                    "duration": {
                        "text": "2 hours 30 mins",
                        "value": 8987
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "179 km",
                        "value": 178867
                    },
                    "duration": {
                        "text": "2 hours 35 mins",
                        "value": 9288
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "67.9 km",
                        "value": 67922
                    },
                    "duration": {
                        "text": "1 hour 1 min",
                        "value": 3676
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "271 km",
                        "value": 270980
                    },
                    "duration": {
                        "text": "3 hours 54 mins",
                        "value": 14058
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "246 km",
                        "value": 245862
                    },
                    "duration": {
                        "text": "3 hours 31 mins",
                        "value": 12663
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "255 km",
                        "value": 255270
                    },
                    "duration": {
                        "text": "3 hours 39 mins",
                        "value": 13156
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "108 km",
                        "value": 107550
                    },
                    "duration": {
                        "text": "1 hour 43 mins",
                        "value": 6187
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "100 km",
                        "value": 100050
                    },
                    "duration": {
                        "text": "1 hour 37 mins",
                        "value": 5806
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "129 km",
                        "value": 129265
                    },
                    "duration": {
                        "text": "2 hours 6 mins",
                        "value": 7570
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "93.2 km",
                        "value": 93196
                    },
                    "duration": {
                        "text": "1 hour 27 mins",
                        "value": 5241
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "239 km",
                        "value": 238503
                    },
                    "duration": {
                        "text": "3 hours 23 mins",
                        "value": 12193
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "234 km",
                        "value": 234322
                    },
                    "duration": {
                        "text": "3 hours 26 mins",
                        "value": 12355
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "158 km",
                        "value": 158331
                    },
                    "duration": {
                        "text": "2 hours 28 mins",
                        "value": 8887
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "212 km",
                        "value": 211925
                    },
                    "duration": {
                        "text": "3 hours 3 mins",
                        "value": 10968
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "87.9 km",
                        "value": 87882
                    },
                    "duration": {
                        "text": "1 hour 23 mins",
                        "value": 4950
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "124 km",
                        "value": 124302
                    },
                    "duration": {
                        "text": "2 hours 3 mins",
                        "value": 7369
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "109 km",
                        "value": 109183
                    },
                    "duration": {
                        "text": "1 hour 45 mins",
                        "value": 6306
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "152 km",
                        "value": 152222
                    },
                    "duration": {
                        "text": "2 hours 21 mins",
                        "value": 8487
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "230 km",
                        "value": 229954
                    },
                    "duration": {
                        "text": "3 hours 18 mins",
                        "value": 11855
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "222 km",
                        "value": 221926
                    },
                    "duration": {
                        "text": "3 hours 8 mins",
                        "value": 11303
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "173 km",
                        "value": 173280
                    },
                    "duration": {
                        "text": "2 hours 48 mins",
                        "value": 10106
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "172 km",
                        "value": 171599
                    },
                    "duration": {
                        "text": "2 hours 31 mins",
                        "value": 9066
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "161 km",
                        "value": 161401
                    },
                    "duration": {
                        "text": "2 hours 39 mins",
                        "value": 9513
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "75.8 km",
                        "value": 75811
                    },
                    "duration": {
                        "text": "1 hour 18 mins",
                        "value": 4664
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "163 km",
                        "value": 163194
                    },
                    "duration": {
                        "text": "2 hours 48 mins",
                        "value": 10093
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "170 km",
                        "value": 170459
                    },
                    "duration": {
                        "text": "2 hours 47 mins",
                        "value": 10021
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "169 km",
                        "value": 168570
                    },
                    "duration": {
                        "text": "2 hours 37 mins",
                        "value": 9423
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "74.7 km",
                        "value": 74687
                    },
                    "duration": {
                        "text": "1 hour 9 mins",
                        "value": 4145
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "23.3 km",
                        "value": 23287
                    },
                    "duration": {
                        "text": "34 mins",
                        "value": 2019
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "22.1 km",
                        "value": 22115
                    },
                    "duration": {
                        "text": "29 mins",
                        "value": 1724
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "22.1 km",
                        "value": 22115
                    },
                    "duration": {
                        "text": "29 mins",
                        "value": 1724
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "265 km",
                        "value": 265410
                    },
                    "duration": {
                        "text": "3 hours 59 mins",
                        "value": 14343
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "171 km",
                        "value": 170848
                    },
                    "duration": {
                        "text": "2 hours 33 mins",
                        "value": 9200
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}