const data = {
    region: 'REG002	',
    area: 'ARE004',
    "branchcode": '211',
    "branchname": 'สาขาสินเชื่อเพื่อรายย่อยชลบุรี',
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
        "Thanon Phaya Satcha, Tambon Samet, Amphoe Mueang Chon Buri, Chang Wat Chon Buri 20000, Thailand"
    ],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "158 km",
                        "value": 158194
                    },
                    "duration": {
                        "text": "2 hours 25 mins",
                        "value": 8699
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "141 km",
                        "value": 141299
                    },
                    "duration": {
                        "text": "2 hours 7 mins",
                        "value": 7608
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "53.6 km",
                        "value": 53633
                    },
                    "duration": {
                        "text": "1 hour 2 mins",
                        "value": 3739
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "268 km",
                        "value": 267936
                    },
                    "duration": {
                        "text": "5 hours 6 mins",
                        "value": 18341
                    },
                    "status": "OK"
                },
                {
                    "status": "ZERO_RESULTS"
                },
                {
                    "distance": {
                        "text": "136 km",
                        "value": 135600
                    },
                    "duration": {
                        "text": "2 hours 12 mins",
                        "value": 7919
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "107 km",
                        "value": 107377
                    },
                    "duration": {
                        "text": "1 hour 31 mins",
                        "value": 5471
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "123 km",
                        "value": 123097
                    },
                    "duration": {
                        "text": "1 hour 45 mins",
                        "value": 6272
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "126 km",
                        "value": 126390
                    },
                    "duration": {
                        "text": "1 hour 47 mins",
                        "value": 6420
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "107 km",
                        "value": 107377
                    },
                    "duration": {
                        "text": "1 hour 31 mins",
                        "value": 5471
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "197 km",
                        "value": 196734
                    },
                    "duration": {
                        "text": "2 hours 47 mins",
                        "value": 10005
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "198 km",
                        "value": 198079
                    },
                    "duration": {
                        "text": "2 hours 50 mins",
                        "value": 10216
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "180 km",
                        "value": 179765
                    },
                    "duration": {
                        "text": "2 hours 58 mins",
                        "value": 10663
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "166 km",
                        "value": 165918
                    },
                    "duration": {
                        "text": "2 hours 24 mins",
                        "value": 8653
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "115 km",
                        "value": 115186
                    },
                    "duration": {
                        "text": "1 hour 47 mins",
                        "value": 6432
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "226 km",
                        "value": 225681
                    },
                    "duration": {
                        "text": "3 hours 7 mins",
                        "value": 11235
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "233 km",
                        "value": 232799
                    },
                    "duration": {
                        "text": "3 hours 12 mins",
                        "value": 11537
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "70.8 km",
                        "value": 70750
                    },
                    "duration": {
                        "text": "1 hour 16 mins",
                        "value": 4584
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "70.8 km",
                        "value": 70750
                    },
                    "duration": {
                        "text": "1 hour 16 mins",
                        "value": 4584
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "168 km",
                        "value": 167863
                    },
                    "duration": {
                        "text": "2 hours 55 mins",
                        "value": 10505
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "316 km",
                        "value": 316090
                    },
                    "duration": {
                        "text": "4 hours 23 mins",
                        "value": 15795
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "239 km",
                        "value": 239445
                    },
                    "duration": {
                        "text": "3 hours 19 mins",
                        "value": 11939
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "230 km",
                        "value": 230201
                    },
                    "duration": {
                        "text": "3 hours 12 mins",
                        "value": 11510
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "272 km",
                        "value": 271629
                    },
                    "duration": {
                        "text": "4 hours 8 mins",
                        "value": 14855
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "106 km",
                        "value": 105908
                    },
                    "duration": {
                        "text": "2 hours 8 mins",
                        "value": 7683
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "155 km",
                        "value": 155010
                    },
                    "duration": {
                        "text": "2 hours 10 mins",
                        "value": 7819
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "149 km",
                        "value": 149420
                    },
                    "duration": {
                        "text": "2 hours 7 mins",
                        "value": 7607
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "171 km",
                        "value": 171366
                    },
                    "duration": {
                        "text": "2 hours 50 mins",
                        "value": 10217
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "130 km",
                        "value": 130070
                    },
                    "duration": {
                        "text": "1 hour 51 mins",
                        "value": 6640
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "130 km",
                        "value": 130070
                    },
                    "duration": {
                        "text": "1 hour 51 mins",
                        "value": 6640
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "77.1 km",
                        "value": 77054
                    },
                    "duration": {
                        "text": "1 hour 8 mins",
                        "value": 4068
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "78.0 km",
                        "value": 78036
                    },
                    "duration": {
                        "text": "1 hour 25 mins",
                        "value": 5111
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "255 km",
                        "value": 255070
                    },
                    "duration": {
                        "text": "3 hours 36 mins",
                        "value": 12946
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "70.2 km",
                        "value": 70204
                    },
                    "duration": {
                        "text": "1 hour 11 mins",
                        "value": 4266
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "63.3 km",
                        "value": 63255
                    },
                    "duration": {
                        "text": "1 hour 6 mins",
                        "value": 3936
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "72.8 km",
                        "value": 72796
                    },
                    "duration": {
                        "text": "1 hour 17 mins",
                        "value": 4636
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "84.8 km",
                        "value": 84782
                    },
                    "duration": {
                        "text": "1 hour 28 mins",
                        "value": 5308
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "48.2 km",
                        "value": 48192
                    },
                    "duration": {
                        "text": "52 mins",
                        "value": 3115
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "54.5 km",
                        "value": 54472
                    },
                    "duration": {
                        "text": "54 mins",
                        "value": 3264
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "29.1 km",
                        "value": 29124
                    },
                    "duration": {
                        "text": "30 mins",
                        "value": 1795
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "41.4 km",
                        "value": 41403
                    },
                    "duration": {
                        "text": "39 mins",
                        "value": 2354
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "74.9 km",
                        "value": 74884
                    },
                    "duration": {
                        "text": "1 hour 6 mins",
                        "value": 3944
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "55.1 km",
                        "value": 55106
                    },
                    "duration": {
                        "text": "48 mins",
                        "value": 2904
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "57.0 km",
                        "value": 57009
                    },
                    "duration": {
                        "text": "51 mins",
                        "value": 3080
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "88.5 km",
                        "value": 88505
                    },
                    "duration": {
                        "text": "1 hour 28 mins",
                        "value": 5251
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "85.6 km",
                        "value": 85563
                    },
                    "duration": {
                        "text": "1 hour 13 mins",
                        "value": 4382
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "132 km",
                        "value": 131813
                    },
                    "duration": {
                        "text": "2 hours 9 mins",
                        "value": 7767
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "21.9 km",
                        "value": 21933
                    },
                    "duration": {
                        "text": "32 mins",
                        "value": 1922
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "33.6 km",
                        "value": 33588
                    },
                    "duration": {
                        "text": "47 mins",
                        "value": 2844
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "51.3 km",
                        "value": 51290
                    },
                    "duration": {
                        "text": "55 mins",
                        "value": 3289
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "100 km",
                        "value": 100449
                    },
                    "duration": {
                        "text": "1 hour 43 mins",
                        "value": 6150
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "131 km",
                        "value": 130584
                    },
                    "duration": {
                        "text": "2 hours 8 mins",
                        "value": 7666
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "64.9 km",
                        "value": 64910
                    },
                    "duration": {
                        "text": "1 hour 11 mins",
                        "value": 4247
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "123 km",
                        "value": 123339
                    },
                    "duration": {
                        "text": "2 hours 15 mins",
                        "value": 8098
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "72.9 km",
                        "value": 72944
                    },
                    "duration": {
                        "text": "1 hour 13 mins",
                        "value": 4361
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "240 km",
                        "value": 239814
                    },
                    "duration": {
                        "text": "3 hours 34 mins",
                        "value": 12837
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "82.7 km",
                        "value": 82732
                    },
                    "duration": {
                        "text": "1 hour 23 mins",
                        "value": 4993
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "30.6 km",
                        "value": 30574
                    },
                    "duration": {
                        "text": "44 mins",
                        "value": 2628
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "88.6 km",
                        "value": 88565
                    },
                    "duration": {
                        "text": "1 hour 13 mins",
                        "value": 4383
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "101 km",
                        "value": 100584
                    },
                    "duration": {
                        "text": "1 hour 28 mins",
                        "value": 5287
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "26.6 km",
                        "value": 26557
                    },
                    "duration": {
                        "text": "43 mins",
                        "value": 2591
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "179 km",
                        "value": 178684
                    },
                    "duration": {
                        "text": "2 hours 32 mins",
                        "value": 9118
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "169 km",
                        "value": 168620
                    },
                    "duration": {
                        "text": "2 hours 26 mins",
                        "value": 8763
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "47.9 km",
                        "value": 47874
                    },
                    "duration": {
                        "text": "49 mins",
                        "value": 2957
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "11.3 km",
                        "value": 11260
                    },
                    "duration": {
                        "text": "14 mins",
                        "value": 822
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "11.7 km",
                        "value": 11687
                    },
                    "duration": {
                        "text": "20 mins",
                        "value": 1187
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "238 km",
                        "value": 238460
                    },
                    "duration": {
                        "text": "3 hours 20 mins",
                        "value": 11979
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "128 km",
                        "value": 127993
                    },
                    "duration": {
                        "text": "2 hours 14 mins",
                        "value": 8024
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "122 km",
                        "value": 121905
                    },
                    "duration": {
                        "text": "1 hour 56 mins",
                        "value": 6978
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "131 km",
                        "value": 131313
                    },
                    "duration": {
                        "text": "2 hours 5 mins",
                        "value": 7471
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "108 km",
                        "value": 107873
                    },
                    "duration": {
                        "text": "1 hour 39 mins",
                        "value": 5929
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "108 km",
                        "value": 108217
                    },
                    "duration": {
                        "text": "1 hour 39 mins",
                        "value": 5938
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "87.9 km",
                        "value": 87874
                    },
                    "duration": {
                        "text": "1 hour 22 mins",
                        "value": 4939
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "115 km",
                        "value": 115100
                    },
                    "duration": {
                        "text": "1 hour 40 mins",
                        "value": 6012
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "80.1 km",
                        "value": 80094
                    },
                    "duration": {
                        "text": "1 hour 7 mins",
                        "value": 4027
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "75.9 km",
                        "value": 75913
                    },
                    "duration": {
                        "text": "1 hour 10 mins",
                        "value": 4190
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "166 km",
                        "value": 165918
                    },
                    "duration": {
                        "text": "2 hours 24 mins",
                        "value": 8653
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "88.0 km",
                        "value": 87968
                    },
                    "duration": {
                        "text": "1 hour 28 mins",
                        "value": 5283
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "84.2 km",
                        "value": 84224
                    },
                    "duration": {
                        "text": "1 hour 13 mins",
                        "value": 4350
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "151 km",
                        "value": 151079
                    },
                    "duration": {
                        "text": "2 hours 44 mins",
                        "value": 9810
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "172 km",
                        "value": 171945
                    },
                    "duration": {
                        "text": "3 hours 0 mins",
                        "value": 10777
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "195 km",
                        "value": 195495
                    },
                    "duration": {
                        "text": "2 hours 45 mins",
                        "value": 9889
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "114 km",
                        "value": 114498
                    },
                    "duration": {
                        "text": "1 hour 50 mins",
                        "value": 6576
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "98.0 km",
                        "value": 97968
                    },
                    "duration": {
                        "text": "1 hour 34 mins",
                        "value": 5619
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "23.8 km",
                        "value": 23772
                    },
                    "duration": {
                        "text": "34 mins",
                        "value": 2014
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "38.1 km",
                        "value": 38068
                    },
                    "duration": {
                        "text": "37 mins",
                        "value": 2206
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "106 km",
                        "value": 105908
                    },
                    "duration": {
                        "text": "2 hours 8 mins",
                        "value": 7683
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "194 km",
                        "value": 194067
                    },
                    "duration": {
                        "text": "3 hours 26 mins",
                        "value": 12330
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "87.7 km",
                        "value": 87687
                    },
                    "duration": {
                        "text": "1 hour 24 mins",
                        "value": 5030
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "76.8 km",
                        "value": 76801
                    },
                    "duration": {
                        "text": "1 hour 12 mins",
                        "value": 4323
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "57.8 km",
                        "value": 57759
                    },
                    "duration": {
                        "text": "47 mins",
                        "value": 2832
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "245 km",
                        "value": 245225
                    },
                    "duration": {
                        "text": "3 hours 27 mins",
                        "value": 12448
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "177 km",
                        "value": 177231
                    },
                    "duration": {
                        "text": "2 hours 34 mins",
                        "value": 9266
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "182 km",
                        "value": 182423
                    },
                    "duration": {
                        "text": "2 hours 40 mins",
                        "value": 9625
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "182 km",
                        "value": 182423
                    },
                    "duration": {
                        "text": "2 hours 40 mins",
                        "value": 9625
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "108 km",
                        "value": 108253
                    },
                    "duration": {
                        "text": "1 hour 54 mins",
                        "value": 6835
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "214 km",
                        "value": 214121
                    },
                    "duration": {
                        "text": "2 hours 57 mins",
                        "value": 10602
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}