var json_short = 
		{
			"columns":["index","distance","enddatetime","endlat","endlon","speed","startdatetime","startlat","startlon","startcity","endcity","co2"],
			"index":[0,1,2,3,4,5],
			"data":
				[
					[13767,644.0325722902,1500490653500,50.3462446,1.3186074,807.1707492576,1500487781100,47.0885343,8.5727276,["Unter\u00e4geri","Switzerland"],
					[null,"France"],8.410319835],
					[13769,612.0662111055,1500487640000,46.9872241,8.9387868,758.498574864,1500484735000,43.9047714,15.4334137,["Tkon","Croatia"],
					["Glarus","Switzerland"],8.1555449506],
					[17526,549.1447777354,1500147737000,43.537389,16.2987791,524.6606156707,1500143969000,45.7053528,10.0702001,[null,"Italy"],
					["Ka\u0161tel \u0160tafili\u0107","Croatia"],7.6546633218],
					[17540,852.5609045861,1500143342000,45.8801473,8.2306133,609.8455817115,1500138309219,51.1549131,-0.1708729,["Horley","United Kingdom"],
					[null,"Italy"],10.077417719],
					[22821,361.2551849759,1499753098401,51.5279128,-0.1309184,76.1588267874,1499736022000,54.4178336,-2.5844399,[null,"United Kingdom"],
					["London","United Kingdom"],6.1637809763],
					[25977,573.0260433429,1499468281450,55.9480165,-3.3594123,268.7315408243,1499460605039,51.1581924,-0.179127,["Horley","United Kingdom"],
					["Ingliston","United Kingdom"],7.8446734965]
				]
		};

// Regex to add line breaks to data from S3
// Find matches: ([0-9])],
// Replace with: $1],\n\t\t\t\t\t

var json_long = 
		{
			"columns":["distance","enddatetime","endlat","endlon","index","speed","startdatetime","startlat","startlon","startcity","startairport","endcity","endairport","co2"],
			"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98],
			"data":
				[
					[1246.7003853229,1515346630145,51.4709966,-0.4815414,74647,484.2047978958,1515337361089,40.4794774,-3.592185,["Madrid","Spain"],null,["Longford","United Kingdom"],"Heathrow Airport",265.069944291],
					[8040.0783615071,1515317317532,40.4946331,-3.5666656,74807,792.5754851746,1515280798257,4.6996635,-74.1413968,["Bogot\u00e1","Colombia"],"El Dorado Luis Carlos Galan Sarmiento International Airport",["Madrid","Spain"],null,1508.878710521],
					[216.7835374201,1515264480217,4.7013359,-74.1436222,74925,310.8616800841,1515261969709,6.1701846,-75.4280638,["Rionegro","Colombia"],null,[null,"Colombia"],"El Dorado Luis Carlos Galan Sarmiento International Airport",105.1316151379],
					[8040.4784618467,1513307945986,6.1718712,-75.4276256,83292,754.618864225,1513269587917,40.4981438,-3.5683861,["Madrid","Spain"],null,["Rionegro","Colombia"],null,1508.9591460235],
					[1245.8749815575,1513251302920,40.4859111,-3.5899144,83433,528.3588372524,1513242814087,51.4708156,-0.4860919,["Longford","United Kingdom"],"Heathrow Airport",["Madrid","Spain"],null,264.9400863019],
					[7819.668810361,1506172187625,51.4690717,-0.4631594,126657,766.4577782198,1506135459173,40.7869421,-111.9851904,["Salt Lake City","United States"],null,["Longford","United Kingdom"],"Heathrow Airport",1464.725117247],
					[949.8451765354,1506131428651,40.7883217,-111.9812081,126684,505.3024226257,1506124661530,33.9465724,-118.4083576,["Los Angeles","United States"],"Bob Hope Airport",["Salt Lake City","United States"],null,218.540420385],
					[8769.309715713,1505447551759,33.9433729,-118.4103429,131989,10510.9334285933,1505444548266,51.4709982,-0.4642501,["Longford","United Kingdom"],"Heathrow Airport",["Los Angeles","United States"],"Bob Hope Airport",1657.1985841108],
					[644.0325722902,1500490653500,50.3462446,1.3186074,190673,807.1707492576,1500487781100,47.0885343,8.5727276,["Unter\u00e4geri","Switzerland"],null,[null,"France"],"Le Touquet Airport",170.9712051276],
					[612.0662111055,1500487640000,46.9872241,8.9387868,190676,758.498574864,1500484735000,43.9047714,15.4334137,["Tkon","Croatia"],"Zadar Airport",["Glarus","Switzerland"],"Buochs Airport",166.0201739325],
					[549.1447777354,1500147737000,43.537389,16.2987791,194434,524.6606156707,1500143969000,45.7053528,10.0702001,[null,"Italy"],"Orio al Serio International Airport",["Ka\u0161tel \u0160tafili\u0107","Croatia"],"Split Airport",156.2865441148],
					[852.5609045861,1500143342000,45.8801473,8.2306133,194449,609.8455817115,1500138309219,51.1549131,-0.1708729,["Horley","United Kingdom"],"Heathrow Airport",[null,"Italy"],"Malpensa Airport",203.3677318709],
					[361.2551849759,1499753098401,51.5279128,-0.1309184,199731,76.1588267874,1499736022000,54.4178336,-2.5844399,[null,"United Kingdom"],null,["London","United Kingdom"],"Heathrow Airport",127.3141168756],
					[573.0260433429,1499468281450,55.9480165,-3.3594123,202888,268.7315408243,1499460605039,51.1581924,-0.179127,["Horley","United Kingdom"],"Heathrow Airport",["Ingliston","United Kingdom"],"Edinburgh Airport",159.979013107],
					[395.6427904399,1489601369012,52.4786541,-1.8999218,318649,6825.0883817162,1489601160324,55.9520018,-3.1898917,["Edinburgh","United Kingdom"],"Edinburgh Airport",["Birmingham","United Kingdom"],"Birmingham Airport",132.6062246605],
					[246.429082304,1489598649041,55.9520018,-3.1898917,318687,1581.0925338331,1489598087945,53.7557363,-2.70769,["Preston","United Kingdom"],"Blackpool Airport",["Edinburgh","United Kingdom"],"Edinburgh Airport",109.6767300911],
					[8771.8410989095,1477931781975,51.4644764,-0.4163152,473673,775.6838714634,1477891071282,33.9446585,-118.4042459,["Los Angeles","United States"],"Bob Hope Airport",["Feltham","United Kingdom"],"Heathrow Airport",1657.719429565],
					[381.6356351241,1477452716245,33.9443113,-118.4077466,476515,260.3256773227,1477447438670,36.0854168,-115.137917,["Las Vegas","United States"],"McCarran International Airport",["Los Angeles","United States"],"Bob Hope Airport",130.4500181171],
					[333.6944955097,1477172630632,37.2517343,-113.284391,477426,69.6743895147,1477155389000,38.9917526,-110.1811438,["Green River","United States"],"Canyonlands Field Airport",["Toquerville","United States"],"St. George Regional Airport",123.0760175521],
					[380.0829612564,1476660979717,36.073671,-115.144485,479552,273.8450704517,1476655983101,33.9447439,-118.4041612,["Los Angeles","United States"],"Bob Hope Airport",["Las Vegas","United States"],"McCarran International Airport",130.2110533472],
					[8767.1767712745,1476571471950,33.9449113,-118.4036109,480998,700.9010179367,1476526441574,51.4770488,-0.4873098,["Longford","United Kingdom"],"Heathrow Airport",["Los Angeles","United States"],"Bob Hope Airport",1656.7597516634],
					[944.0791736725,1473850253255,51.3775361,-0.2447371,516051,52.657978042,1473785710613,52.5374187,13.409524,["Berlin","Germany"],"Berlin Sch\u00f6nefeld Airport",["Worcester Park","United Kingdom"],"Heathrow Airport",217.6400976719],
					[428.0832811278,1473682928992,52.4486952,13.3535704,517038,55993.1625169269,1473682901469,54.8602806,8.2957944,["Sylt","Germany"],"Sylt Airport",["Berlin","Germany"],"Berlin Sch\u00f6nefeld Airport",137.6029649339],
					[445.327309632,1473680429040,54.8602812,8.2957981,517141,265426.874966933,1473680423000,51.7307042,12.468914,["Gr\u00e4fenhainichen","Germany"],"Leipzig\/Halle Airport",["Sylt","Germany"],"Sylt Airport",140.2607197492],
					[446.1645415376,1473680220000,51.669584,12.3550538,517153,96462.215322046,1473680203349,54.8602806,8.2957946,["Sylt","Germany"],"Sylt Airport",["Muldestausee","Germany"],"Leipzig\/Halle Airport",140.3897889583],
					[447.0287758461,1473680203349,54.8602806,8.2957946,517155,68144.6306459658,1473680179733,51.6531898,12.3395868,["Muldestausee","Germany"],"Leipzig\/Halle Airport",["Sylt","Germany"],"Sylt Airport",140.5230238141],
					[447.0287204923,1473680179733,51.6531898,12.3395868,517157,100732.5605072215,1473680163757,54.8602807,8.2957962,["Sylt","Germany"],"Sylt Airport",["Muldestausee","Germany"],"Leipzig\/Halle Airport",140.5230152804],
					[472.8938222757,1473679607425,54.8602806,8.2957946,517185,18488.2631915697,1473679515344,51.3925505,12.3896561,["Leipzig","Germany"],"Leipzig\/Halle Airport",["Sylt","Germany"],"Sylt Airport",144.5118804612],
					[298.9294495171,1473675692204,51.1680802,14.4185832,517258,120.8528604131,1473666787607,49.5980298,11.0012106,["Erlangen","Germany"],"Airport N\u00fcrnberg",["Bautzen","Germany"],"Dresden Airport",117.734363178],
					[913.0353865552,1473058608946,51.5076887,0.0473893,525168,508.5355865261,1473052145431,52.5513663,13.289478,["Berlin","Germany"],"Berlin Sch\u00f6nefeld Airport",["London","United Kingdom"],"Heathrow Airport",212.7950770682],
					[951.1786448572,1472757154653,52.3887203,13.5188327,529126,4170.8402005261,1472756333657,51.1549192,-0.1666169,["Horley","United Kingdom"],"Heathrow Airport",["Sch\u00f6nefeld","Germany"],"Berlin Sch\u00f6nefeld Airport",218.7486512417],
					[789.7811375485,1466012143040,51.4692455,-0.4493086,618453,1664.1325678072,1466010434515,47.4555616,8.5666849,["Kloten","Switzerland"],"Zurich Airport",["Longford","United Kingdom"],"Heathrow Airport",193.5963117113],
					[1639.9082260763,1466000867294,47.4509548,8.5589085,618535,30330.1341343555,1466000672647,37.9355761,23.944539,["Spata","Greece"],null,["Kloten","Switzerland"],"Zurich Airport",355.2246319492],
					[1733.1369453647,1465393790651,37.9376252,23.9473122,622082,19534.1118763699,1465393471246,46.2307046,6.1065162,["Meyrin","Switzerland"],"Gen\u00e8ve A\u00e9roport",[null,"Greece"],null,370.6054150692],
					[754.9443647697,1465378727534,46.2306557,6.1077505,622195,1403.2307215515,1465376790718,51.4684823,-0.4521806,["Longford","United Kingdom"],"Heathrow Airport",["Meyrin","Switzerland"],"Gen\u00e8ve A\u00e9roport",188.1808289744],
					[6767.6473816378,1463898133040,51.4711011,-0.4593059,640065,772.2464717529,1463866584135,33.6375082,-84.416803,["Atlanta","United States"],"Hartsfield-Jackson Atlanta International Airport",["Longford","United Kingdom"],"Heathrow Airport",1258.3017416201],
					[3206.3262743948,1463854210236,33.7551824,-84.3733984,640126,444.4364840328,1463828238528,6.1715206,-75.4275751,["Rionegro","Colombia"],null,["Atlanta","United States"],"Hartsfield-Jackson Atlanta International Airport",612.5727365845],
					[3195.9180362016,1462588034791,6.1725679,-75.4282525,659378,709.6123140285,1462571821283,33.6429949,-84.4252156,["Atlanta","United States"],"Hartsfield-Jackson Atlanta International Airport",["Rionegro","Colombia"],null,610.8056003685],
					[6765.9251228171,1462562087304,33.6408781,-84.4256395,659508,607.4294328239,1462521988275,51.4773787,-0.4869458,["Longford","United Kingdom"],"Heathrow Airport",["Atlanta","United States"],"Hartsfield-Jackson Atlanta International Airport",1257.9696678978],
					[4263.5729553517,1454480978319,12.1224453,15.0447615,728616,271.4338241055,1454424430972,49.0016659,2.5745114,["Le Mesnil-Amelot","France"],null,["N'Djamena","Chad"],"N'Djamena International Airport",795.7200218312],
					[348.2242828527,1454420522878,49.0038949,2.5825687,728691,202.7173961008,1454414338863,51.4612258,-0.44497,["Longford","United Kingdom"],"Heathrow Airport",["Le Mesnil-Amelot","France"],null,125.3099372563],
					[6450.7587495599,1451900353503,51.465369,-0.4523738,775678,821.8509742681,1451872096882,44.8804338,-93.2160296,["Saint Paul","United States"],"Minneapolis\u2212Saint Paul International Airport",["Longford","United Kingdom"],"Heathrow Airport",1197.524060899],
					[2405.9353197511,1451867621259,44.8909828,-93.2432861,775746,689.0076595093,1451855050474,25.9987325,-80.1968814,["Hollywood","United States"],"Fort Lauderdale-Hollywood International Airport",["Minneapolis","United States"],"Minneapolis\u2212Saint Paul International Airport",483.1100194701],
					[7000.3141246119,1450827463210,28.4274939,-81.301761,790285,678.9745446495,1450790346751,51.1566116,-0.1666342,["Horley","United Kingdom"],"Heathrow Airport",["Orlando","United States"],"Orlando International Airport",1303.3390095897],
					[642.3058260131,1450088305264,51.4444614,0.3226599,798746,39230.7727090769,1450088246323,45.6752574,0.1807915,["Gond-Pontouvre","France"],"Angoul\u00eameCognac Airport",["Northfleet","United Kingdom"],"London City Airport",170.7036590661],
					[640.3057843897,1450088246323,45.6752574,0.1807915,798748,18528.7067657071,1450088121916,51.4263879,0.3320165,["Northfleet","United Kingdom"],"London City Airport",["Gond-Pontouvre","France"],"Angoul\u00eameCognac Airport",170.3937827251],
					[640.3057843897,1450088121916,51.4263879,0.3320165,798750,10588.7687040897,1450087904223,45.6752574,0.1807915,["Gond-Pontouvre","France"],"Angoul\u00eameCognac Airport",["Northfleet","United Kingdom"],"London City Airport",170.3937827251],
					[412.066837236,1450087609781,45.6752574,0.1807915,798755,242.9455537953,1450081503719,49.0273978,2.5000451,["Louvres","France"],null,["Gond-Pontouvre","France"],"Angoul\u00eameCognac Airport",135.1354659362],
					[265.3082679958,1450009158392,49.59667,2.7574279,799614,175.1212579551,1450003704401,51.4207738,0.3448266,["Istead Rise","United Kingdom"],"London City Airport",["Roye-sur-Matz","France"],"A\u00e9roport Paris Beauvais Till\u00e9",112.5730085197],
					[237.7982882736,1447622690811,51.8897638,-0.2013766,826296,142.4486335204,1447616681109,53.9571041,-1.0940213,["York","United Kingdom"],"Leeds Bradford Airport",["Stevenage","United Kingdom"],"London Luton Airport",108.353138992],
					[424.3277379761,1447436142868,55.2383551,-1.6149237,827226,16582.4995077955,1447436050748,51.531576,-0.1232068,["London","United Kingdom"],"Heathrow Airport",[null,"United Kingdom"],"Newcastle International Airport",137.024293613],
					[4263.5027960418,1444599314401,12.1220198,15.0411809,842083,543.9897376801,1444571099512,49.0022253,2.5779605,["Le Mesnil-Amelot","France"],null,["N'Djamena","Chad"],"N'Djamena International Airport",795.7076285719],
					[348.4912493761,1444565888275,49.0043228,2.5844659,842156,945.6437168834,1444564561593,51.4617841,-0.4489046,["Longford","United Kingdom"],"Heathrow Airport",["Le Mesnil-Amelot","France"],null,125.3509905226],
					[363.0322869249,1441823036463,51.1540167,-0.1705933,870999,2305.7029367689,1441822469644,52.310241,4.7543827,["Schiphol","Netherlands"],"IJmuiden Heliport",["Horley","United Kingdom"],"Heathrow Airport",127.5874908364],
					[364.3500657207,1441623946667,52.3110501,4.7575108,873426,1784.9141626522,1441623211808,51.1530396,-0.1868168,["Horley","United Kingdom"],"Heathrow Airport",["Schiphol","Netherlands"],"IJmuiden Heliport",127.7902145661],
					[6352.395181161,1438684013153,51.4736722,-0.4432145,899718,732.768901278,1438652804647,41.9784022,-87.914094,["Chicago","United States"],"O'Hare International Airport",["Longford","United Kingdom"],"Heathrow Airport",1178.7903225196],
					[508.6849072327,1438648174078,41.9783698,-87.9092996,899773,424.3052149262,1438643858162,41.4083704,-81.836121,["Cleveland","United States"],"Cleveland Hopkins International Airport",["Chicago","United States"],"O'Hare International Airport",150.0358732305],
					[3475.8944598873,1438476564449,41.4096586,-81.8404945,902005,696.844893269,1438458607483,37.6214782,-122.3915992,["San Francisco","United States"],"San Francisco International Airport",["Cleveland","United States"],"Cleveland Hopkins International Airport",658.5844218239],
					[8636.3082482125,1438045132321,37.6177611,-122.3899023,907595,603.894588197,1437993648651,51.516668,-0.1763801,["London","United Kingdom"],"Heathrow Airport",["San Francisco","United States"],"San Francisco International Airport",1629.8910448889],
					[1366.9768175307,1437812894965,51.8922725,0.2605678,908760,482.6055791769,1437802697991,41.2343687,-8.6717602,["Perafita","Portugal"],"Francisco S\u00e1 Carneiro Airport",[null,"United Kingdom"],"London City Airport",284.0214208406],
					[1366.8211723798,1437001637846,41.2364501,-8.6721555,917472,392.4655624921,1436989100297,51.893019,0.2596886,[null,"United Kingdom"],"London City Airport",["Perafita","Portugal"],"Francisco S\u00e1 Carneiro Airport",283.9968595005],
					[932.3705008179,1435651156765,51.3096097,-0.1447876,928497,194.7032209794,1435633917534,52.4934879,13.3140456,["Berlin","Germany"],"Berlin Sch\u00f6nefeld Airport",["Coulsdon","United Kingdom"],"Heathrow Airport",215.8122712908],
					[7116.8636032944,1430993914523,51.4695795,-0.4636159,981226,828.3342269024,1430962984123,25.8083724,-80.3102354,["Miami","United States"],"Fort Lauderdale-Hollywood International Airport",["Longford","United Kingdom"],"Heathrow Airport",1326.0309181914],
					[7114.0948778633,1430515132181,25.8073254,-80.2958541,986385,773.6312292301,1430482027595,51.4639709,-0.4924403,["Longford","United Kingdom"],"Heathrow Airport",["Miami","United States"],"Fort Lauderdale-Hollywood International Airport",1325.4908365063],
					[1250.9457820125,1428594980442,51.4718824,-0.4819323,997167,478.2939404063,1428585564883,40.4366751,-3.5553809,["Coslada","Spain"],null,["Longford","United Kingdom"],"Heathrow Airport",265.7379007787],
					[8040.0687013171,1428568599090,40.4959592,-3.567564,997377,635.1690409891,1428523029729,4.698679,-74.1410329,["Bogot\u00e1","Colombia"],"El Dorado Luis Carlos Galan Sarmiento International Airport",["Madrid","Spain"],null,1508.8767684654],
					[217.4417898448,1428518265152,4.6914362,-74.1467177,997451,189.1709757395,1428514127147,6.1701325,-75.4288057,["Rionegro","Colombia"],null,["Bogot\u00e1","Colombia"],"El Dorado Luis Carlos Galan Sarmiento International Airport",105.2324975749],
					[472.3328522497,1428173212627,6.2033942,-75.5463755,999729,233.7467254738,1428165938094,10.4463481,-75.5156423,["Cartagena","Colombia"],"Helipuerto Hospital Naval",[null,"Colombia"],null,144.4253407076],
					[4168.2161782509,1427285573026,6.1738133,-75.5832545,1003087,346.8715734124,1427242313274,41.9825368,-87.9057894,["Chicago","United States"],"O'Hare International Airport",["Envigado","Colombia"],null,778.90511113],
					[1934.7357439769,1427233719555,41.9825367,-87.9057889,1003150,515.7380210083,1427220214542,25.7813314,-80.2645467,["Miami","United States"],"Fort Lauderdale-Hollywood International Airport",["Chicago","United States"],"O'Hare International Airport",404.0387825533],
					[7115.667264078,1427136920655,25.7893129,-80.2823982,1003441,735.4276351766,1427102088673,51.4618337,-0.4779835,["Longford","United Kingdom"],"Heathrow Airport",["Miami","United States"],"Fort Lauderdale-Hollywood International Airport",1325.7975480953],
					[218.2608849906,1426787660098,51.4759361,0.2717735,1005029,150.4915363455,1426782438946,50.6242727,3.0814098,["Lille","France"],null,["Grays","United Kingdom"],"London City Airport",105.3580328343],
					[363.2451100088,1426281005281,52.3046251,4.7670369,1009391,231.8333011612,1426275364666,51.1573422,-0.1665598,["Horley","United Kingdom"],"Heathrow Airport",["Schiphol","Netherlands"],"IJmuiden Heliport",127.6202305322],
					[366.0769381898,1421009065988,51.5318265,-0.1386269,1073353,65.6229540392,1420988983427,54.3479444,-2.9585197,["Far Sawrey","United Kingdom"],null,["London","United Kingdom"],"Heathrow Airport",128.055882616],
					[531.878910498,1419196787492,55.9581666,-3.1864795,1086721,68.0628151017,1419168655184,51.5358195,-0.1224057,["London","United Kingdom"],"Heathrow Airport",["Edinburgh","United Kingdom"],"Edinburgh Airport",153.6183378277],
					[336.0806550735,1418467566439,51.5110241,0.0509982,1093229,366.1380460365,1418464261974,52.3074833,4.7725704,["Schiphol","Netherlands"],"IJmuiden Heliport",["London","United Kingdom"],"Heathrow Airport",123.4428265439],
					[302.3389297241,1418329702374,50.8365967,4.3358239,1094195,135.4349350716,1418321665894,51.5287578,0.1453735,["Dagenham","United Kingdom"],"London City Airport",["Saint-Gilles","Belgium"],"Brussels Airport",118.2580189913],
					[319.7928685773,1416433187099,50.8230085,4.318029,1111935,146.9775749636,1416425354242,51.5302239,-0.1241142,["London","United Kingdom"],"Heathrow Airport",["Vorst","Belgium"],"Brussels Airport",120.9394572519],
					[1864.6316423897,1413898875940,51.87744,-0.3764909,1133207,536.9512400548,1413886374481,63.9945362,-22.6245244,[null,"Iceland"],"Keflavik International Airport",["Luton","United Kingdom"],"London Luton Airport",392.3856863768],
					[1850.224565464,1413389834652,63.8801935,-22.4490833,1137192,188.6505365014,1413354526995,51.8774611,-0.3764863,["Luton","United Kingdom"],"London Luton Airport",[null,"Iceland"],"Keflavik International Airport",389.9944215697],
					[382.6847461848,1409003550279,51.8786665,-0.3786642,1165456,224.258689816,1408997407083,48.9992635,2.5719392,["Le Mesnil-Amelot","France"],null,["Luton","United Kingdom"],"London Luton Airport",130.6114872869],
					[309.5664922938,1408742543786,49.0049436,2.5681061,1167411,231.934189182,1408737738805,51.1570477,-0.1774793,["Horley","United Kingdom"],"Heathrow Airport",["Tremblay-en-France","France"],null,119.3682390386],
					[978.6505796777,1406056819630,51.8768984,-0.3780562,1190334,547.0174755552,1406050378991,43.57954,3.9598647,["Mauguio","France"],"Montpellier-M\u00e9diterran\u00e9e Airport",["Luton","United Kingdom"],"London Luton Airport",223.0401595188],
					[973.967789874,1405620959700,43.6061567,3.8738258,1191235,248.5625545366,1405606853456,51.8787033,-0.380375,["Luton","United Kingdom"],"London Luton Airport",["Montpellier","France"],"Montpellier-M\u00e9diterran\u00e9e Airport",222.3084299802],
					[8626.9517196884,1398599383249,51.4738958,-0.4550663,1254050,789.8322877697,1398560062210,37.6127083,-122.3896707,["San Francisco","United States"],"San Francisco International Airport",["Heathrow Airport","United Kingdom"],"Heathrow Airport",1627.9742866966],
					[8767.49904631,1397686940220,33.9453027,-118.4028588,1258875,707.2197608442,1397642310533,51.4768405,-0.4799394,["Longford","United Kingdom"],"Heathrow Airport",["Los Angeles","United States"],"Bob Hope Airport",1656.826054714],
					[8498.8139965231,1389093239960,51.412528,-0.2072355,1308014,368.8732115011,1389010296202,4.6969475,-74.1399384,["Bogot\u00e1","Colombia"],"El Dorado Luis Carlos Galan Sarmiento International Airport",["London","United Kingdom"],"Heathrow Airport",1601.781167477],
					[228.8986919436,1388951849748,4.7001456,-74.1429211,1308852,69.7482526866,1388940035326,6.1739149,-75.5833684,["Envigado","Colombia"],null,["Bogot\u00e1","Colombia"],"El Dorado Luis Carlos Galan Sarmiento International Airport",106.9886336124],
					[477.7837418647,1387600539626,10.4651694,-75.5025844,1316143,91.0237070783,1387581643214,6.1738845,-75.5833872,["Envigado","Colombia"],null,["La Boquilla","Colombia"],"Helipuerto Hospital Naval",145.2662915213],
					[4014.4133640622,1387171032949,4.5811775,-74.0900021,1318870,488.0955080049,1387141424219,40.6424224,-73.7835373,[null,"United States"],"Sands Point Seaplane Base",["Bogot\u00e1","Colombia"],"El Dorado Luis Carlos Galan Sarmiento International Airport",751.9077703614],
					[5544.8333645779,1387135751171,40.6461797,-73.7925759,1318953,537.8736342811,1387098639480,51.4766649,-0.4806622,["Longford","United Kingdom"],"Heathrow Airport",[null,"United States"],"Sands Point Seaplane Base",1027.3495713735],
					[531.7193605777,1386541679842,51.5309525,-0.1219241,1325588,107.6801165573,1386523903211,55.9510637,-3.1883985,["Edinburgh","United Kingdom"],"Edinburgh Airport",["London","United Kingdom"],"Heathrow Airport",153.5936870407],
					[514.2093703935,1386374803208,55.9510588,-3.1883993,1325646,107.7757459396,1386357627231,51.6853453,-0.1814137,["Potters Bar","United Kingdom"],"Heathrow Airport",["Edinburgh","United Kingdom"],"Edinburgh Airport",150.8889695318],
					[476.3787605104,1383252537823,51.5050044,0.0473067,1352953,316.03644242,1383247111349,53.4164081,-6.2403623,["Swords","Ireland"],"Dublin Airport",["London","United Kingdom"],"Heathrow Airport",145.0495229673],
					[477.3960614804,1382986532010,53.4212897,-6.250197,1355332,276.5214397917,1382980316847,51.5040514,0.0497615,["London","United Kingdom"],"Heathrow Airport",[null,"Ireland"],"Dublin Airport",145.2064771961],
					[267.5856033049,1378250479716,51.4114472,-0.2101374,1397091,64.9876591212,1378235656776,53.4767073,-2.228758,["Manchester","United Kingdom"],"Manchester Airport",["London","United Kingdom"],"Heathrow Airport",112.922472486],
					[259.2861587953,1378213466836,53.4791108,-2.2372589,1397099,62.5148502569,1378198535501,51.5313193,-0.1382008,["London","United Kingdom"],"Heathrow Airport",["Manchester","United Kingdom"],"Manchester Airport",111.6489965079],
					[531.0188488809,1377297169531,55.9511027,-3.1821137,1397469,94.5892737211,1377276959334,51.5197164,-0.1917414,["London","United Kingdom"],"Heathrow Airport",["Edinburgh","United Kingdom"],"Edinburgh Airport",153.4854577506],
					[1147.4778749693,1374065664332,41.8493166,3.1325664,1415085,158.8144222841,1374039653342,51.877431,-0.3770517,["Luton","United Kingdom"],"London Luton Airport",["Palam\u00f3s","Spain"],"Girona-Costa Brava Airport",249.4789000429]
			]
		};

var json = json_long;

