/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "sccieobservers.h"

QVector<int> ScCIEObserver::wavelengths() const
{
	QVector<int> wls;
	wls.reserve(m_y.count());

	QMap<int, double>::const_iterator iter;
	for (iter = m_y.begin(); iter!= m_y.end(); ++iter)
		wls.append(iter.key());

	return wls;
}

ScCIE1931Observer::ScCIE1931Observer()
{
	m_x[380] = 0.0014, m_y[380] = 0.0000, m_z[380] = 0.0065;
	m_x[385] = 0.0022, m_y[385] = 0.0001, m_z[385] = 0.0105;
	m_x[390] = 0.0042, m_y[390] = 0.0001, m_z[390] = 0.0201;
	m_x[395] = 0.0076, m_y[395] = 0.0002, m_z[395] = 0.0362;
	m_x[400] = 0.0143, m_y[400] = 0.0004, m_z[400] = 0.0679;

	m_x[405] = 0.0232, m_y[405] = 0.0006, m_z[405] = 0.1102;
	m_x[410] = 0.0435, m_y[410] = 0.0012, m_z[410] = 0.2074;
	m_x[415] = 0.0776, m_y[415] = 0.0022, m_z[415] = 0.3713;
	m_x[420] = 0.1344, m_y[420] = 0.0040, m_z[420] = 0.6456;
	m_x[425] = 0.2148, m_y[425] = 0.0073, m_z[425] = 1.0391;

	m_x[430] = 0.2839, m_y[430] = 0.0116, m_z[430] = 1.3856;
	m_x[435] = 0.3285, m_y[435] = 0.0168, m_z[435] = 1.6230;
	m_x[440] = 0.3483, m_y[440] = 0.0230, m_z[440] = 1.7471;
	m_x[445] = 0.3481, m_y[445] = 0.0298, m_z[445] = 1.7826;
	m_x[450] = 0.3362, m_y[450] = 0.0380, m_z[450] = 1.7721;

	m_x[455] = 0.3187, m_y[455] = 0.0480, m_z[455] = 1.7441;
	m_x[460] = 0.2908, m_y[460] = 0.0600, m_z[460] = 1.6692;
	m_x[465] = 0.2511, m_y[465] = 0.0739, m_z[465] = 1.5281;
	m_x[470] = 0.1954, m_y[470] = 0.0910, m_z[470] = 1.2876;
	m_x[475] = 0.1421, m_y[475] = 0.1126, m_z[475] = 1.0419;

	m_x[480] = 0.0956, m_y[480] = 0.1390, m_z[480] = 0.8130;
	m_x[485] = 0.0580, m_y[485] = 0.1693, m_z[485] = 0.6162;
	m_x[490] = 0.0320, m_y[490] = 0.2080, m_z[490] = 0.4652;
	m_x[495] = 0.0147, m_y[495] = 0.2586, m_z[495] = 0.3533;
	m_x[500] = 0.0049, m_y[500] = 0.3230, m_z[500] = 0.2720;

	m_x[505] = 0.0024, m_y[505] = 0.4073, m_z[505] = 0.2123;
	m_x[510] = 0.0093, m_y[510] = 0.5030, m_z[510] = 0.1582;
	m_x[515] = 0.0291, m_y[515] = 0.6082, m_z[515] = 0.1117;
	m_x[520] = 0.0633, m_y[520] = 0.7100, m_z[520] = 0.0782;
	m_x[525] = 0.1096, m_y[525] = 0.7932, m_z[525] = 0.0573;

	m_x[530] = 0.1655, m_y[530] = 0.8620, m_z[530] = 0.0422;
	m_x[535] = 0.2257, m_y[535] = 0.9149, m_z[535] = 0.0298;
	m_x[540] = 0.2904, m_y[540] = 0.9540, m_z[540] = 0.0203;
	m_x[545] = 0.3597, m_y[545] = 0.9803, m_z[545] = 0.0134;
	m_x[550] = 0.4334, m_y[550] = 0.9950, m_z[550] = 0.0087;

	m_x[555] = 0.5121, m_y[555] = 1.0000, m_z[555] = 0.0057;
	m_x[560] = 0.5945, m_y[560] = 0.9950, m_z[560] = 0.0039;
	m_x[565] = 0.6784, m_y[565] = 0.9786, m_z[565] = 0.0027;
	m_x[570] = 0.7621, m_y[570] = 0.9520, m_z[570] = 0.0021;
	m_x[575] = 0.8425, m_y[575] = 0.9154, m_z[575] = 0.0018;

	m_x[580] = 0.9163, m_y[580] = 0.8700, m_z[580] = 0.0017;
	m_x[585] = 0.9786, m_y[585] = 0.8163, m_z[585] = 0.0014;
	m_x[590] = 1.0263, m_y[590] = 0.7570, m_z[590] = 0.0011;
	m_x[595] = 1.0567, m_y[595] = 0.6949, m_z[595] = 0.0010;
	m_x[600] = 1.0622, m_y[600] = 0.6310, m_z[600] = 0.0008;

	m_x[605] = 1.0456, m_y[605] = 0.5668, m_z[605] = 0.0006;
	m_x[610] = 1.0026, m_y[610] = 0.5030, m_z[610] = 0.0003;
	m_x[615] = 0.9384, m_y[615] = 0.4412, m_z[615] = 0.0002;
	m_x[620] = 0.8544, m_y[620] = 0.3810, m_z[620] = 0.0002;
	m_x[625] = 0.7514, m_y[625] = 0.3210, m_z[625] = 0.0001;

	m_x[630] = 0.6424, m_y[630] = 0.2650, m_z[630] = 0.0000;
	m_x[635] = 0.5419, m_y[635] = 0.2170, m_z[635] = 0.0000;
	m_x[640] = 0.4479, m_y[640] = 0.1750, m_z[640] = 0.0000;
	m_x[645] = 0.3608, m_y[645] = 0.1382, m_z[645] = 0.0000;
	m_x[650] = 0.2835, m_y[650] = 0.1070, m_z[650] = 0.0000;

	m_x[655] = 0.2187, m_y[655] = 0.0816, m_z[655] = 0.0000;
	m_x[660] = 0.1649, m_y[660] = 0.0610, m_z[660] = 0.0000;
	m_x[665] = 0.1212, m_y[665] = 0.0446, m_z[665] = 0.0000;
	m_x[670] = 0.0874, m_y[670] = 0.0320, m_z[670] = 0.0000;
	m_x[675] = 0.0636, m_y[675] = 0.0232, m_z[675] = 0.0000;

	m_x[680] = 0.0468, m_y[680] = 0.0170, m_z[680] = 0.0000;
	m_x[685] = 0.0329, m_y[685] = 0.0119, m_z[685] = 0.0000;
	m_x[690] = 0.0227, m_y[690] = 0.0082, m_z[690] = 0.0000;
	m_x[695] = 0.0158, m_y[695] = 0.0057, m_z[695] = 0.0000;
	m_x[700] = 0.0114, m_y[700] = 0.0041, m_z[700] = 0.0000;

	m_x[705] = 0.0081, m_y[705] = 0.0029, m_z[705] = 0.0000;
	m_x[710] = 0.0058, m_y[710] = 0.0021, m_z[710] = 0.0000;
	m_x[715] = 0.0041, m_y[715] = 0.0015, m_z[715] = 0.0000;
	m_x[720] = 0.0029, m_y[720] = 0.0010, m_z[720] = 0.0000;
	m_x[725] = 0.0020, m_y[725] = 0.0007, m_z[725] = 0.0000;

	m_x[730] = 0.0014, m_y[730] = 0.0005, m_z[730] = 0.0000;
	m_x[735] = 0.0010, m_y[735] = 0.0004, m_z[735] = 0.0000;
	m_x[740] = 0.0007, m_y[740] = 0.0002, m_z[740] = 0.0000;
	m_x[745] = 0.0005, m_y[745] = 0.0002, m_z[745] = 0.0000;
	m_x[750] = 0.0003, m_y[750] = 0.0001, m_z[750] = 0.0000;

	m_x[755] = 0.0002, m_y[755] = 0.0001, m_z[755] = 0.0000;
	m_x[760] = 0.0002, m_y[760] = 0.0001, m_z[760] = 0.0000;
	m_x[765] = 0.0001, m_y[765] = 0.0000, m_z[765] = 0.0000;
	m_x[770] = 0.0001, m_y[770] = 0.0000, m_z[770] = 0.0000;
	m_x[775] = 0.0001, m_y[775] = 0.0000, m_z[775] = 0.0000;

	m_x[780] = 0.0000, m_y[780] = 0.0000, m_z[780] = 0.0000;
}

ScCIE1964Observer::ScCIE1964Observer()
{
	m_x[380] = 0.0002, m_y[380] = 0.0000, m_z[380] = 0.0007;
	m_x[385] = 0.0007, m_y[385] = 0.0001, m_z[385] = 0.0029;
	m_x[390] = 0.0024, m_y[390] = 0.0003, m_z[390] = 0.0105;
	m_x[395] = 0.0072, m_y[395] = 0.0008, m_z[395] = 0.0323;
	m_x[400] = 0.0191, m_y[400] = 0.0020, m_z[400] = 0.0860;

	m_x[405] = 0.0434, m_y[405] = 0.0045, m_z[405] = 0.1971;
	m_x[410] = 0.0847, m_y[410] = 0.0088, m_z[410] = 0.3894;
	m_x[415] = 0.1406, m_y[415] = 0.0145, m_z[415] = 0.6568;
	m_x[420] = 0.2045, m_y[420] = 0.0214, m_z[420] = 0.9725;
	m_x[425] = 0.2647, m_y[425] = 0.0295, m_z[425] = 1.2825;

	m_x[430] = 0.3147, m_y[430] = 0.0387, m_z[430] = 1.5535;
	m_x[435] = 0.3577, m_y[435] = 0.0496, m_z[435] = 1.7985;
	m_x[440] = 0.3837, m_y[440] = 0.0621, m_z[440] = 1.9673;
	m_x[445] = 0.3867, m_y[445] = 0.0747, m_z[445] = 2.0273;
	m_x[450] = 0.3707, m_y[450] = 0.0895, m_z[450] = 1.9948;

	m_x[455] = 0.3430, m_y[455] = 0.1063, m_z[455] = 1.9007;
	m_x[460] = 0.3023, m_y[460] = 0.1282, m_z[460] = 1.7454;
	m_x[465] = 0.2541, m_y[465] = 0.1528, m_z[465] = 1.5549;
	m_x[470] = 0.1956, m_y[470] = 0.1852, m_z[470] = 1.3176;
	m_x[475] = 0.1323, m_y[475] = 0.2199, m_z[475] = 1.0302;

	m_x[480] = 0.0805, m_y[480] = 0.2536, m_z[480] = 0.7721;
	m_x[485] = 0.0411, m_y[485] = 0.2977, m_z[485] = 0.5701;
	m_x[490] = 0.0162, m_y[490] = 0.3391, m_z[490] = 0.4153;
	m_x[495] = 0.0051, m_y[495] = 0.3954, m_z[495] = 0.3024;
	m_x[500] = 0.0038, m_y[500] = 0.4608, m_z[500] = 0.2185;

	m_x[505] = 0.0154, m_y[505] = 0.5314, m_z[505] = 0.1592;
	m_x[510] = 0.0375, m_y[510] = 0.6067, m_z[510] = 0.1120;
	m_x[515] = 0.0714, m_y[515] = 0.6857, m_z[515] = 0.0822;
	m_x[520] = 0.1177, m_y[520] = 0.7618, m_z[520] = 0.0607;
	m_x[525] = 0.1730, m_y[525] = 0.8233, m_z[525] = 0.0431;

	m_x[530] = 0.2365, m_y[530] = 0.8752, m_z[530] = 0.0305;
	m_x[535] = 0.3042, m_y[535] = 0.9238, m_z[535] = 0.0206;
	m_x[540] = 0.3768, m_y[540] = 0.9620, m_z[540] = 0.0137;
	m_x[545] = 0.4516, m_y[545] = 0.9822, m_z[545] = 0.0079;
	m_x[550] = 0.5298, m_y[550] = 0.9918, m_z[550] = 0.0040;

	m_x[555] = 0.6161, m_y[555] = 0.9991, m_z[555] = 0.0011;
	m_x[560] = 0.7052, m_y[560] = 0.9973, m_z[560] = 0.0000;
	m_x[565] = 0.7938, m_y[565] = 0.9824, m_z[565] = 0.0000;
	m_x[570] = 0.8787, m_y[570] = 0.9556, m_z[570] = 0.0000;
	m_x[575] = 0.9512, m_y[575] = 0.9152, m_z[575] = 0.0000;

	m_x[580] = 1.0142, m_y[580] = 0.8689, m_z[580] = 0.0000;
	m_x[585] = 1.0743, m_y[585] = 0.8256, m_z[585] = 0.0000;
	m_x[590] = 1.1185, m_y[590] = 0.7774, m_z[590] = 0.0000;
	m_x[595] = 1.1343, m_y[595] = 0.7204, m_z[595] = 0.0000;
	m_x[600] = 1.1240, m_y[600] = 0.6583, m_z[600] = 0.0000;

	m_x[605] = 1.0891, m_y[605] = 0.5939, m_z[605] = 0.0000;
	m_x[610] = 1.0305, m_y[610] = 0.5280, m_z[610] = 0.0000;
	m_x[615] = 0.9507, m_y[615] = 0.4618, m_z[615] = 0.0000;
	m_x[620] = 0.8563, m_y[620] = 0.3981, m_z[620] = 0.0000;
	m_x[625] = 0.7549, m_y[625] = 0.3396, m_z[625] = 0.0000;

	m_x[630] = 0.6475, m_y[630] = 0.2835, m_z[630] = 0.0000;
	m_x[635] = 0.5351, m_y[635] = 0.2283, m_z[635] = 0.0000;
	m_x[640] = 0.4316, m_y[640] = 0.1798, m_z[640] = 0.0000;
	m_x[645] = 0.3437, m_y[645] = 0.1402, m_z[645] = 0.0000;
	m_x[650] = 0.2683, m_y[650] = 0.1076, m_z[650] = 0.0000;

	m_x[655] = 0.2043, m_y[655] = 0.0812, m_z[655] = 0.0000;
	m_x[660] = 0.1526, m_y[660] = 0.0603, m_z[660] = 0.0000;
	m_x[665] = 0.1122, m_y[665] = 0.0441, m_z[665] = 0.0000;
	m_x[670] = 0.0813, m_y[670] = 0.0318, m_z[670] = 0.0000;
	m_x[675] = 0.0579, m_y[675] = 0.0226, m_z[675] = 0.0000;

	m_x[680] = 0.0409, m_y[680] = 0.0159, m_z[680] = 0.0000;
	m_x[685] = 0.0286, m_y[685] = 0.0111, m_z[685] = 0.0000;
	m_x[690] = 0.0199, m_y[690] = 0.0077, m_z[690] = 0.0000;
	m_x[695] = 0.0138, m_y[695] = 0.0054, m_z[695] = 0.0000;
	m_x[700] = 0.0096, m_y[700] = 0.0037, m_z[700] = 0.0000;

	m_x[705] = 0.0066, m_y[705] = 0.0026, m_z[705] = 0.0000;
	m_x[710] = 0.0046, m_y[710] = 0.0018, m_z[710] = 0.0000;
	m_x[715] = 0.0031, m_y[715] = 0.0012, m_z[715] = 0.0000;
	m_x[720] = 0.0022, m_y[720] = 0.0008, m_z[720] = 0.0000;
	m_x[725] = 0.0015, m_y[725] = 0.0006, m_z[725] = 0.0000;

	m_x[730] = 0.0010, m_y[730] = 0.0004, m_z[730] = 0.0000;
	m_x[735] = 0.0007, m_y[735] = 0.0003, m_z[735] = 0.0000;
	m_x[740] = 0.0005, m_y[740] = 0.0002, m_z[740] = 0.0000;
	m_x[745] = 0.0004, m_y[745] = 0.0001, m_z[745] = 0.0000;
	m_x[750] = 0.0003, m_y[750] = 0.0001, m_z[750] = 0.0000;

	m_x[755] = 0.0002, m_y[755] = 0.0001, m_z[755] = 0.0000;
	m_x[760] = 0.0001, m_y[760] = 0.0000, m_z[760] = 0.0000;
	m_x[765] = 0.0001, m_y[765] = 0.0000, m_z[765] = 0.0000;
	m_x[770] = 0.0001, m_y[770] = 0.0000, m_z[770] = 0.0000;
	m_x[775] = 0.0000, m_y[775] = 0.0000, m_z[775] = 0.0000;

	m_x[780] = 0.0000, m_y[780] = 0.0000, m_z[780] = 0.0000;
}
