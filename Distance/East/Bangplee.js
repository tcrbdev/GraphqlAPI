const data = {
    region: 'REG002	',
    area: 'ARE004',
    "branchcode": '249',
    "branchname": 'สาขาสินเชื่อเพื่อรายย่อยบางพลี',
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
        "4 Soi Kheha Bang Phli 5, Tambon Bang Sao Thong, Amphoe Bang Sao Thong, Chang Wat Samut Prakan 10540, Thailand"
    ],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "156 km",
                        "value": 156341
                    },
                    "duration": {
                        "text": "2 hours 27 mins",
                        "value": 8839
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "139 km",
                        "value": 139446
                    },
                    "duration": {
                        "text": "2 hours 9 mins",
                        "value": 7748
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "87.2 km",
                        "value": 87206
                    },
                    "duration": {
                        "text": "1 hour 31 mins",
                        "value": 5453
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "313 km",
                        "value": 312750
                    },
                    "duration": {
                        "text": "5 hours 41 mins",
                        "value": 20480
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "180 km",
                        "value": 180413
                    },
                    "duration": {
                        "text": "2 hours 48 mins",
                        "value": 10058
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "152 km",
                        "value": 152191
                    },
                    "duration": {
                        "text": "2 hours 7 mins",
                        "value": 7609
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "168 km",
                        "value": 167911
                    },
                    "duration": {
                        "text": "2 hours 20 mins",
                        "value": 8410
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "171 km",
                        "value": 171204
                    },
                    "duration": {
                        "text": "2 hours 23 mins",
                        "value": 8559
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "152 km",
                        "value": 152191
                    },
                    "duration": {
                        "text": "2 hours 7 mins",
                        "value": 7609
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "242 km",
                        "value": 241548
                    },
                    "duration": {
                        "text": "3 hours 22 mins",
                        "value": 12143
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "243 km",
                        "value": 242893
                    },
                    "duration": {
                        "text": "3 hours 26 mins",
                        "value": 12354
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "225 km",
                        "value": 224578
                    },
                    "duration": {
                        "text": "3 hours 33 mins",
                        "value": 12801
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "164 km",
                        "value": 164065
                    },
                    "duration": {
                        "text": "2 hours 27 mins",
                        "value": 8793
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "160 km",
                        "value": 160000
                    },
                    "duration": {
                        "text": "2 hours 23 mins",
                        "value": 8570
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "270 km",
                        "value": 270495
                    },
                    "duration": {
                        "text": "3 hours 43 mins",
                        "value": 13374
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "278 km",
                        "value": 277613
                    },
                    "duration": {
                        "text": "3 hours 48 mins",
                        "value": 13675
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "68.9 km",
                        "value": 68897
                    },
                    "duration": {
                        "text": "1 hour 19 mins",
                        "value": 4724
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "68.9 km",
                        "value": 68897
                    },
                    "duration": {
                        "text": "1 hour 19 mins",
                        "value": 4724
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "215 km",
                        "value": 215091
                    },
                    "duration": {
                        "text": "3 hours 9 mins",
                        "value": 11326
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "361 km",
                        "value": 360904
                    },
                    "duration": {
                        "text": "4 hours 59 mins",
                        "value": 17933
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "238 km",
                        "value": 237592
                    },
                    "duration": {
                        "text": "3 hours 21 mins",
                        "value": 12080
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "228 km",
                        "value": 228348
                    },
                    "duration": {
                        "text": "3 hours 14 mins",
                        "value": 11650
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "270 km",
                        "value": 269776
                    },
                    "duration": {
                        "text": "4 hours 10 mins",
                        "value": 14995
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "131 km",
                        "value": 130930
                    },
                    "duration": {
                        "text": "2 hours 24 mins",
                        "value": 8654
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "200 km",
                        "value": 199824
                    },
                    "duration": {
                        "text": "2 hours 46 mins",
                        "value": 9958
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "194 km",
                        "value": 194234
                    },
                    "duration": {
                        "text": "2 hours 42 mins",
                        "value": 9745
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "170 km",
                        "value": 169513
                    },
                    "duration": {
                        "text": "2 hours 53 mins",
                        "value": 10357
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "175 km",
                        "value": 174884
                    },
                    "duration": {
                        "text": "2 hours 26 mins",
                        "value": 8778
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "175 km",
                        "value": 174884
                    },
                    "duration": {
                        "text": "2 hours 26 mins",
                        "value": 8778
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "126 km",
                        "value": 125763
                    },
                    "duration": {
                        "text": "1 hour 48 mins",
                        "value": 6485
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "123 km",
                        "value": 122850
                    },
                    "duration": {
                        "text": "2 hours 1 min",
                        "value": 7249
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "300 km",
                        "value": 299884
                    },
                    "duration": {
                        "text": "4 hours 11 mins",
                        "value": 15084
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "68.4 km",
                        "value": 68351
                    },
                    "duration": {
                        "text": "1 hour 13 mins",
                        "value": 4406
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "55.2 km",
                        "value": 55246
                    },
                    "duration": {
                        "text": "1 hour 6 mins",
                        "value": 3932
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "62.4 km",
                        "value": 62447
                    },
                    "duration": {
                        "text": "1 hour 15 mins",
                        "value": 4512
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "60.6 km",
                        "value": 60581
                    },
                    "duration": {
                        "text": "1 hour 15 mins",
                        "value": 4479
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "14.1 km",
                        "value": 14142
                    },
                    "duration": {
                        "text": "19 mins",
                        "value": 1112
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "18.9 km",
                        "value": 18877
                    },
                    "duration": {
                        "text": "30 mins",
                        "value": 1789
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "30.1 km",
                        "value": 30096
                    },
                    "duration": {
                        "text": "34 mins",
                        "value": 2029
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "23.5 km",
                        "value": 23520
                    },
                    "duration": {
                        "text": "29 mins",
                        "value": 1711
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "19.9 km",
                        "value": 19912
                    },
                    "duration": {
                        "text": "38 mins",
                        "value": 2260
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "104 km",
                        "value": 103815
                    },
                    "duration": {
                        "text": "1 hour 29 mins",
                        "value": 5321
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "13.5 km",
                        "value": 13477
                    },
                    "duration": {
                        "text": "23 mins",
                        "value": 1385
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "133 km",
                        "value": 133319
                    },
                    "duration": {
                        "text": "2 hours 3 mins",
                        "value": 7389
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "134 km",
                        "value": 134272
                    },
                    "duration": {
                        "text": "1 hour 53 mins",
                        "value": 6798
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "115 km",
                        "value": 115072
                    },
                    "duration": {
                        "text": "1 hour 44 mins",
                        "value": 6258
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "66.7 km",
                        "value": 66747
                    },
                    "duration": {
                        "text": "1 hour 8 mins",
                        "value": 4060
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "78.4 km",
                        "value": 78402
                    },
                    "duration": {
                        "text": "1 hour 23 mins",
                        "value": 4982
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "49.4 km",
                        "value": 49437
                    },
                    "duration": {
                        "text": "57 mins",
                        "value": 3429
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "90.1 km",
                        "value": 90134
                    },
                    "duration": {
                        "text": "1 hour 41 mins",
                        "value": 6070
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "129 km",
                        "value": 128731
                    },
                    "duration": {
                        "text": "2 hours 10 mins",
                        "value": 7806
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "110 km",
                        "value": 109723
                    },
                    "duration": {
                        "text": "1 hour 46 mins",
                        "value": 6385
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "113 km",
                        "value": 113024
                    },
                    "duration": {
                        "text": "2 hours 14 mins",
                        "value": 8017
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "71.1 km",
                        "value": 71091
                    },
                    "duration": {
                        "text": "1 hour 15 mins",
                        "value": 4501
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "285 km",
                        "value": 284627
                    },
                    "duration": {
                        "text": "4 hours 10 mins",
                        "value": 14975
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "80.9 km",
                        "value": 80879
                    },
                    "duration": {
                        "text": "1 hour 26 mins",
                        "value": 5133
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "67.8 km",
                        "value": 67826
                    },
                    "duration": {
                        "text": "1 hour 7 mins",
                        "value": 4029
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "41.4 km",
                        "value": 41391
                    },
                    "duration": {
                        "text": "45 mins",
                        "value": 2705
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "53.4 km",
                        "value": 53409
                    },
                    "duration": {
                        "text": "1 hour 0 mins",
                        "value": 3608
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "49.8 km",
                        "value": 49789
                    },
                    "duration": {
                        "text": "57 mins",
                        "value": 3401
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "223 km",
                        "value": 223498
                    },
                    "duration": {
                        "text": "3 hours 8 mins",
                        "value": 11256
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "213 km",
                        "value": 213434
                    },
                    "duration": {
                        "text": "3 hours 2 mins",
                        "value": 10901
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "46.0 km",
                        "value": 46021
                    },
                    "duration": {
                        "text": "52 mins",
                        "value": 3097
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "47.0 km",
                        "value": 46954
                    },
                    "duration": {
                        "text": "44 mins",
                        "value": 2634
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "68.7 km",
                        "value": 68657
                    },
                    "duration": {
                        "text": "1 hour 4 mins",
                        "value": 3849
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "283 km",
                        "value": 283274
                    },
                    "duration": {
                        "text": "3 hours 55 mins",
                        "value": 14117
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "128 km",
                        "value": 128028
                    },
                    "duration": {
                        "text": "2 hours 0 mins",
                        "value": 7217
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "120 km",
                        "value": 120052
                    },
                    "duration": {
                        "text": "1 hour 59 mins",
                        "value": 7118
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "120 km",
                        "value": 119920
                    },
                    "duration": {
                        "text": "2 hours 7 mins",
                        "value": 7628
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "157 km",
                        "value": 156581
                    },
                    "duration": {
                        "text": "2 hours 19 mins",
                        "value": 8345
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "153 km",
                        "value": 153031
                    },
                    "duration": {
                        "text": "2 hours 15 mins",
                        "value": 8077
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "137 km",
                        "value": 136583
                    },
                    "duration": {
                        "text": "2 hours 3 mins",
                        "value": 7355
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "164 km",
                        "value": 163808
                    },
                    "duration": {
                        "text": "2 hours 20 mins",
                        "value": 8428
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "32.9 km",
                        "value": 32919
                    },
                    "duration": {
                        "text": "39 mins",
                        "value": 2348
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "21.2 km",
                        "value": 21161
                    },
                    "duration": {
                        "text": "40 mins",
                        "value": 2397
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "164 km",
                        "value": 164065
                    },
                    "duration": {
                        "text": "2 hours 27 mins",
                        "value": 8793
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "86.1 km",
                        "value": 86115
                    },
                    "duration": {
                        "text": "1 hour 30 mins",
                        "value": 5423
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "129 km",
                        "value": 129038
                    },
                    "duration": {
                        "text": "1 hour 48 mins",
                        "value": 6488
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "199 km",
                        "value": 199196
                    },
                    "duration": {
                        "text": "2 hours 56 mins",
                        "value": 10578
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "221 km",
                        "value": 220692
                    },
                    "duration": {
                        "text": "3 hours 14 mins",
                        "value": 11641
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "194 km",
                        "value": 193642
                    },
                    "duration": {
                        "text": "2 hours 47 mins",
                        "value": 10030
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "113 km",
                        "value": 112645
                    },
                    "duration": {
                        "text": "1 hour 52 mins",
                        "value": 6716
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "96.1 km",
                        "value": 96115
                    },
                    "duration": {
                        "text": "1 hour 36 mins",
                        "value": 5759
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "80.2 km",
                        "value": 80223
                    },
                    "duration": {
                        "text": "1 hour 19 mins",
                        "value": 4738
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "86.8 km",
                        "value": 86776
                    },
                    "duration": {
                        "text": "1 hour 17 mins",
                        "value": 4622
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "131 km",
                        "value": 130930
                    },
                    "duration": {
                        "text": "2 hours 24 mins",
                        "value": 8654
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "250 km",
                        "value": 249969
                    },
                    "duration": {
                        "text": "3 hours 45 mins",
                        "value": 13527
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "136 km",
                        "value": 136395
                    },
                    "duration": {
                        "text": "2 hours 4 mins",
                        "value": 7447
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "126 km",
                        "value": 125509
                    },
                    "duration": {
                        "text": "1 hour 52 mins",
                        "value": 6739
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "106 km",
                        "value": 106468
                    },
                    "duration": {
                        "text": "1 hour 27 mins",
                        "value": 5248
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "290 km",
                        "value": 290039
                    },
                    "duration": {
                        "text": "4 hours 3 mins",
                        "value": 14586
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "222 km",
                        "value": 222045
                    },
                    "duration": {
                        "text": "3 hours 10 mins",
                        "value": 11405
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "227 km",
                        "value": 227237
                    },
                    "duration": {
                        "text": "3 hours 16 mins",
                        "value": 11763
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "227 km",
                        "value": 227237
                    },
                    "duration": {
                        "text": "3 hours 16 mins",
                        "value": 11763
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "81.4 km",
                        "value": 81370
                    },
                    "duration": {
                        "text": "1 hour 37 mins",
                        "value": 5800
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "212 km",
                        "value": 212268
                    },
                    "duration": {
                        "text": "2 hours 59 mins",
                        "value": 10742
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}