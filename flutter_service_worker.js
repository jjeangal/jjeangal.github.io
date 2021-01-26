'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/00/98cc02f3e65ce725cc462ab7154bd8a24845fb": "1c42cc203c47ab479e2fa7deb4cd15e0",
".git/objects/00/e6cffc6fe8d59c054a8be1bddae9be96998aff": "5f43a5c352cafaaa445862338ca7da08",
".git/objects/04/8ce9efe657fa2e07d3c042c66c48821d444bb8": "2926033a769488dfd606eb154f7a17e4",
".git/objects/06/46c4a32fc13141d5a09df1edf7e338d94cf96c": "59124d11b6a07ad8d4f45cab6efe6f04",
".git/objects/06/6d81e5a6b0900da960b588fd80651fa6dbf2df": "4c99ebeea32de9fe285bc94d67cca4e3",
".git/objects/06/c0c6d677bdb80f43f6f95dda2ce915a4b5e4fb": "8ff1dcd4a10740743e8370382d75ef75",
".git/objects/06/c898b7905cdd4bfe07cc07930c2563ee91350d": "b1eb5637c2ec0e7e2a6900834c1460e2",
".git/objects/07/2bd8c6ddc7449634c9a2a82f5c0736f66e12c1": "4997a0cfc08cddd111e55bfc6ea66f7b",
".git/objects/08/01ef38d8b833536f6d51f04fbccfa20a909d2d": "4a0551a128fb049f3506e4998a4bb114",
".git/objects/09/3eaac5832aeff4a76424336f537352095639a9": "e52086455baafeb8709c65b3cff8142a",
".git/objects/0b/370883ee387448a4d38510a68ed4c2f4a0ad1e": "558252da8902e067ee620a292907f091",
".git/objects/0b/37454ad5e00dded2b945a9baf3b3746755a6ef": "c9af04f92ebb9483b83c6882ca681478",
".git/objects/0b/3cd434ca0570fc0dc231af9914c60d906f231b": "d89766dae62f13c20663a69807510d7a",
".git/objects/0b/a9a98ff145c17e2eb80b7825a8a2269276799d": "9de72e5617de3391b726984c146d9c1a",
".git/objects/0c/8c34096192abb187e379cb93f476b045a3ecc5": "5d46b524a5a17c08274316572aa206ae",
".git/objects/0d/22fce9f966affdfe6e2ed60fbb3031f2878efe": "9b156039f87a9dcf6c5ae89dd9b0dc0b",
".git/objects/0f/80b84dc88787f7eef344b4e4f3a388693792dd": "569d5c54d7c953e28b517bdec15fa1d8",
".git/objects/0f/bc1dbbd1541e4284ab49ae574c63b3c5055f1f": "bac093fbce48dcfa16b9885308e1b833",
".git/objects/10/fbab9caf831f18643e071397d3024840ff5646": "b283b8a8570d0a2e866ceb370c353629",
".git/objects/11/1902710960cdce95edf0e12be09dec2dfb21ee": "e3a1cf404a5eb44a9a6d9fbe6d38d730",
".git/objects/13/406af47fa153670574cefc3c2785879ef3a8d8": "629e650061e8fd4e2376d92e3c03a682",
".git/objects/13/7865193b9bcc81ff539816fa83ec48e54472fe": "6a55051f368a245b87401b11516527ee",
".git/objects/13/e2a4a4d901462b5523eddba62ce4f70673e1d8": "664fe1b94dcc6d94bc71ca0d105de963",
".git/objects/14/2dd9e82580cd22d912188b1905ee3299c01296": "eec3bff55cae90f6d790230426759941",
".git/objects/16/89368ff86c21ec1cbe311ec557680aadd80959": "c2b432283160ead43deaeda456337bbc",
".git/objects/18/0f5c59137a9931e6d9058757841416b92a35ff": "953438e5bc8b90bd250454e1dc2937be",
".git/objects/18/251f14b2bb48f08e2cd075b67bd479e72dedcf": "af2f58c2f938b6d86488982cf65ec589",
".git/objects/18/937842c7b1ca8974b558567e3ec6a9e623be7a": "462dfca833b09421190dd7a568ac03f9",
".git/objects/19/5113b54655bae72c2911860be2943f259005a1": "f5bdf59a984b126f043d76d274cea041",
".git/objects/1a/5ae43c6d3d5d9ff0a6d88b0ae4bff946650f19": "eae8dfec935554f2f500cd427a872762",
".git/objects/1b/d560ac220d2b21a381c4c5aca988f35ab9f35f": "f34b871047219541eae733b72b42ccba",
".git/objects/1c/0ffe064974bcd67fa5bbe5ad933eed7f96d5ea": "1e892b8f472d63b5d60e2ecf2288ed6a",
".git/objects/1c/9db8829f113c5215d8ef194912d07d5639d679": "803e13646728800c084b2a01e0f0496b",
".git/objects/1d/1ddd27049c9fb1c9fdc7b5a19503cdbc49af90": "4363ff16508eef2ac6c1143b661e84ba",
".git/objects/1d/5069385cb8387eb9e36a9d22f5c39fab3ae150": "5b6a56fb0f5ec1fcc8104355761e19e3",
".git/objects/1e/8faf2d2ba4ba2d148686357f9cbbd746542dbe": "8f07285354ce9c41dabab777801ca62a",
".git/objects/1e/cdfaec133d9c5f449d62e43e172f3290185225": "db955a3d2f5e1f30c78b0d64f7c2f557",
".git/objects/1e/ff7e58aa4fd9ed2138b51bd429e95b1a51d889": "0377f85234c7057866b0b348506a3ddb",
".git/objects/1f/1d24281f44854bc786430d78421f12aa408925": "860a6b920e5a0ad92cc0ef1cb6d935f9",
".git/objects/1f/300cbbcb48cf058fb1dc5d2659ae5b5dabea50": "58669c252afbacd22acbab30cd7f562d",
".git/objects/1f/e7a92f592aaa0d0b3e719acaf5bb2bf6fedbef": "c9fe560fcd6a98acb7e341689469a47c",
".git/objects/21/33712c41b675a8b412f389dc4d18185e8e3f29": "d5d0c1e4fdb3f8b979fdf75779b34af1",
".git/objects/21/ccba366782c39de2489e1d4c25e25bd3418c23": "c0c96aba318d35a87af7fed076705d42",
".git/objects/22/20619f83be766a45ec0369d678f4067651d05c": "f837b22f695fa75531368ce8853bed02",
".git/objects/23/0d5b720ec9caa3c8df8ce42d064b1ad7b12335": "cff20ff367b8bba3a6c88304d1b7bc72",
".git/objects/23/1c12da24989e5e68c79928a36b709d4ade8bf9": "aee12f6dd6a79f8778086768ab13a975",
".git/objects/23/4d44e445f096beee660905aa7608e7772a65db": "3020cf60fd7a3153769661773c5c0edf",
".git/objects/24/3490811d7ef10346f51077307171ae3f5b516f": "5f0c8722ee2cc1c6c40115a9fd9a6409",
".git/objects/24/affad371cdaafb916b9abc225151a10b0bc89e": "e3ba8092a8f8d6bbc4472a1604dfc2e2",
".git/objects/25/af991274f2abbce17e8129153d95bbc8553914": "07b3a49dcf881917590e4df78024cfb6",
".git/objects/25/fa7c341e51f9829a7fe5255ec40bf79386fc6a": "e6f4b6f31a6db599e5e58560fcccc566",
".git/objects/26/b29b9f68911d8a76f759c4942e119fec37d239": "30356d4f5b334e14e0b280a2d4726c5d",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/28/43137801eb88ada7cf7b32c87d15a89d169000": "30997b0d6644da607a6dfcfb954383a2",
".git/objects/28/48dbab7c8d890d0df73a24c10bf04c02eee111": "44ded370720628d02e4d249a40def537",
".git/objects/28/d08450688ceedd9abe60dfbb8c6904de2dfd9c": "d5c797f13fb103fcbab0b345ae7f7092",
".git/objects/2a/824ce3696be8d8d15c46987b5a66e60d07a093": "7232b06001b06e25f2194e9b5d67cd39",
".git/objects/2b/d971db1e37ae9a8c2eb93644463a817f4dd19d": "3e9594cbce50ab4960109eef36c2f151",
".git/objects/2c/7236241bab52bfe3703db3a9172ca561b142d5": "22155c10f30f7996e5d98862cfe88cfe",
".git/objects/2c/ae2dc5d01ffd44cfe2ff1d4c70332ac5febf75": "81d1d7bd300238e1ed2a4c6de9bd50f5",
".git/objects/2f/bee2708b524e57ad67340bfeb5efcbbb77e812": "f02c42dcc47ec13f760c2850417bbc76",
".git/objects/30/a5e4329ab9c66db5bc22272be72a9334c4745f": "c417a425e546147e8c9496a5913927af",
".git/objects/31/10c1d48c8556dab95d4dc17a3e14f48a3870e0": "03426210c505c1624cd2cb2fb3da1f8a",
".git/objects/31/7a010311d335186fe3a2a7f440df93c3111c9d": "8f2c13e7efbff92cef5cfa382aa943b6",
".git/objects/31/b7a2a7f808ab13a99293cab5a5854771134230": "45b4ed5a1fbf3423f74ab14aa854b6e6",
".git/objects/33/2d5c6789fa18f579f23c5245e385527ce260fb": "8d89e9a0cbff119defa49049b69e34a2",
".git/objects/35/515d33aff0386daaacb2cc7f69e57045ba34f7": "c1b79693699da8fcb584cb29d6a804b4",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/36/090411ca4c14d92e886d75c780b8ca865f8049": "738ea77c699285675188ddd94d6f2a72",
".git/objects/36/df436d5e1eab01f362b0c8bf272a73c5d51bb4": "1bbc564ca68889987c7c1e0b53445bbb",
".git/objects/37/6b81422116e0ca8b74c4b1ef9bc9852c2f8273": "b262de64f34b6a00c9529c17f8f5d13d",
".git/objects/37/afff0c5bfa3b5d459a43c55c08a3455f3ece30": "d10db771d976a0c2d3842d2ab4f6b583",
".git/objects/39/caad153eadbd680984787023438c304a87e43a": "ad569bbb9b9704d902ffd1e88716c77b",
".git/objects/3a/3145d535bb816e762452659f6f91ce8d30c76b": "0431d66dd4229bb2e9df3914b98c19ac",
".git/objects/3b/bf54800a4deace448559eac348d3726470e98c": "b7111a471e63c0122f0857801e103d99",
".git/objects/3d/b1442f1b16694e127a82c9a383469fdff73ed3": "db12a4eb6a8e8703fb2a5f91ae3ce939",
".git/objects/3f/3889c22b984ca3cea28c3c5d49e8d1da1fe73a": "54accd2efce2ffc912fb01cbd4792feb",
".git/objects/3f/9738af3c10ee387c5f6e85b093921421c38d5f": "f2732c0fcc414cf4e59b0e5368c41e2e",
".git/objects/3f/e891480dc57c292687358fbfe819c3701d42e5": "89a4fcb809afcb54b0ee6ba667fb1c42",
".git/objects/42/b12d4466b8da261870d07effd981bb70fbdf80": "61e9d8c27abc394439b958c730655fe8",
".git/objects/42/b2cde9a87adf06870ef4a9c513c5d580966293": "40d9af2e9ad46f8cdcb79ffde625c6e8",
".git/objects/43/951fec1755122f313f3f30c7f86bb77414ad06": "7b169188bcd6306d0bba65184f19f4dd",
".git/objects/45/8a3e195bb1884d4b0ba338d5043a7babed2c64": "f7e4c2fa2eea2a7ef9d2c5dd4c25fa10",
".git/objects/46/a65143ef6410a31a4649163ec7dc9e0fae42b6": "6b51a4f26e3a1b11c038097ca89b44ca",
".git/objects/47/55d8875c7bcd6b976444dc707c236ba08d4164": "5350b1f40f6ba8a5d11c470898f12f90",
".git/objects/47/6f265bf6b9151650a1808242259a8c67908442": "a02a101364fe36dbb52b19658a88799a",
".git/objects/48/15d3a2aa893e53a73db4766b468a1700b0794b": "36a3dffc53a0fc9a7fe9cc3f87fa06b9",
".git/objects/48/a69deb9844df213952a93e4a9d3e5225f2918f": "0409ca9e8cbd93ca3c286fb41409179b",
".git/objects/49/d3902034fed40a4fec87d2ddba1659d631bcdb": "f9a62f8f69077938961fe03e53f2d1ad",
".git/objects/4a/5729dcea07bca551ba7c8a01520cd87b6e0315": "79068b2b283bf35694f2c5d6693d3478",
".git/objects/4a/b567c1711afe6b12bfb75b149f9ff940b50c88": "ad11443670bcdaad0c48419ed0f11bf8",
".git/objects/4b/0daeb2ceb100ea6e1f5346dc920239b2a1c734": "c336489634d574d7d83e3665bc80d77f",
".git/objects/4b/985281aed55d38f0a4f0dcd4395c706f5813b6": "2154443cddd9c9f6bec2d604ead0a085",
".git/objects/4b/b57a3e936f42ffe673bdcdfaca9a0facd98f6e": "505b6ada5776607f4424a1eb5ef69ca0",
".git/objects/4c/6630b1517e9fe1d769b6789dde57ec85c6cc12": "075ad0e69909765edb30c90878da79ef",
".git/objects/4c/b3d654befbec733e76d53c64b72b6f4c44fd05": "0bb27dc3dbed2b0070086f75976c7905",
".git/objects/4e/1078db62c111f8cd32165c1bfc7155cab055a0": "86e5900777e4cb91a6add9869871e57e",
".git/objects/4f/8d54ee667c4d8e22915c10b8ed7cdf78ef8e45": "961fed8c9adb712f0b98fa0339e5a9e8",
".git/objects/51/fe842079ca6ef1285b84bb4f28cc5d7fe255bf": "d512ba4893e830903ec61d4a29e8fc09",
".git/objects/52/aa6afcda4c2142d2149e13da124311c1579d6c": "33b592695e57fa1175171fb5d658b170",
".git/objects/53/ba4855b42b05b74078d6ddc63b6ffbde7f83d9": "a5a66be0a9d3dcafa2b69ee38d72cb44",
".git/objects/54/195dc3b558a10f102310b1a56120efb48c00e5": "2772c442e72156d0d17fdb09a39e5f11",
".git/objects/54/d365f73cfb44eae831ca6fecea7ace5e762ccb": "0b7eaa6a0d798710453a1fac362f3efc",
".git/objects/54/d731bde29942ce4ba0a9c9d6f6dee02a653692": "3e0d2b12e30564edd19e34e2c24c6150",
".git/objects/55/b9c3462b4c8c93e9d4707cc189111124cb13ee": "460a9fa14dbc6e63082639fb95793bee",
".git/objects/56/77d5b83c33a0b8879d93ea4d7e4c6f01110b3c": "303a1082e9471ea6572dd847ef9030ca",
".git/objects/56/ffc0fdd5151fb70ce51ec9ef2858fff629db72": "86e5bbcc505827ff462e37040b18ee31",
".git/objects/58/2e8c7bf9478c44cc420d84a83a0154fb2762d4": "1efe707cd589f47cc3e116f25218be9f",
".git/objects/58/c6fe4508582c8e6091e04d1d79497953a8c95a": "0e302bc8efd28835d5b5c7fda87382eb",
".git/objects/5a/227d29a3b27facfbd16b4d7d913f3fe56e32d6": "ed09dcbc97070df7d54f2208eb2aa9cf",
".git/objects/5a/8aa408bf51e01ff52221e38f52a5f438c6bf16": "dbf031186fb551b1a90ee5f218c1880b",
".git/objects/5a/8db68a55aba3af2e5581c864632be003aeb84e": "4552eefb2713e9f117f78882e9f1d8d7",
".git/objects/5a/a3014aab7b2444cf441ba585098c6d03579db3": "fe39c0abf352abd7a88913bdc41f1877",
".git/objects/5b/0a85fb768fdd536ec28d4db066610463b4da9c": "a9b79c50abc7e36c9485039f1b3c1571",
".git/objects/5b/4ee21b532417090828a5ac6ed95ce46a7ae13e": "5fd63d689b3b9284b71c3ad2a3fc8bdd",
".git/objects/5c/914bfe00784f57ce22e40b001fd9ecebce5a6d": "2d87049e94198747383eef9092285eb1",
".git/objects/5d/0bae8ddcc76d9b4911a9944aef7cdc6cd092ec": "4a4cc73077583f6019469310032f4851",
".git/objects/5e/4394c00fa1fccec4d17c17d15a949dadb091eb": "2610d0ef49ad3fe09b0b35e63f49f217",
".git/objects/60/de6590666afdbcdce3de4da1689537f0fe35ec": "f7b922a2e651e94c995bf9cbba9d5b24",
".git/objects/65/7e6d593e228a2b4f0192c504f82dd06c2ecefd": "11c0982e94f45ff52ae0628adf1ac58c",
".git/objects/67/3ab2ed6297af33f57b7787668183035b179c64": "3c7417ac0fa10bd7ff211b7e6b3e6854",
".git/objects/68/3c73a78eda10d392ef11015b60e32f2f019f10": "18752477c7732e7f20b98b2580218780",
".git/objects/69/2a005a4df011067d152baf6095f8a189ab9d62": "31da7e548bdc9480487ad77f6499dd55",
".git/objects/6b/d603b55b39c925233877eff4a28174b4eec966": "2c7bb6fe60cc177f8a9abd08cd87594f",
".git/objects/6b/d87460bf9156f1dc3a7b59833054082046b4d4": "ad41bc2795a58a4c804db7f5b59ed74f",
".git/objects/6c/1c313fb231006808524ec6f2127c8dcd36f4f3": "dffb2c4906405035d32a518b730095ff",
".git/objects/6d/219ea8b2cd550d2a9d3d0a3cdbff162072f211": "2b0ea9c1f297bfb09ee8de3f7ad5d27c",
".git/objects/6d/38a1b5374358609fe45bdf09c8e10feb140d27": "9779d72883b1702099575c4e34a848d4",
".git/objects/6e/7d2b48e2568baaae4a630cb3f2604c497ec959": "54d14f3b96c9d91d1a927da22e93f47c",
".git/objects/6f/0de1f00056343d0b8194a095b9dfee8bd78c43": "1cd4c20f285403695b6d3fdaab815e7b",
".git/objects/6f/2a0f4b692ee9049578ec6e560d6fcdd2085bd7": "1e796c9692b2997c5070ecab2840398a",
".git/objects/70/53a9dd3ef053bd1585bc5ebcb5244674b18ad4": "32cd2a08a53db43c967796227079eb27",
".git/objects/70/6cf380f6b860d4af39833c4e4ed2b003c00c41": "2baf74b17c25ab28b8287b9b892ed7d7",
".git/objects/70/a79c72d609aab2da742f1764ab7e0b0f7a4805": "00a759f8cdf7b2b73403f12d8e226de5",
".git/objects/70/c8d69de7fb9a8a2ce48a791939b50137d5ca72": "85621f5698cda68087598c6fc60edd0b",
".git/objects/72/78fbc817c2d368a85e61d72d14bbea48725ad4": "fc21340f2355a7bcf446de35454af5ba",
".git/objects/72/ef0b0d487695bc003d855a0dde8ba401a919c2": "96dfa0165d4cdabd25b593bf5cab8e82",
".git/objects/74/04e2dd3a89c3d38d610c9c610413750739a29a": "11a06ffab8a869dbba49457c597e4a92",
".git/objects/74/799fb73dd9c7db17335614dcc4306bcc2412e7": "ad7087004322909f99eacf3a2d3f7089",
".git/objects/75/03cfeb5b0a53a8ce53233c37b3a9c6e65ec4ad": "384e0fbfbd4d5fd839ed8a2b90e628f6",
".git/objects/75/d9ce35381639d660ba8e46e40e0fd31b2baefc": "9121bff0656abf58e332cc594670b3a8",
".git/objects/76/295deb0bd29f8f7259e49aac23237dbeac3fab": "1d28b45c9dc5929765124022d506f936",
".git/objects/76/7a1ca410878ba64e015044a717b9d7df31ead7": "679f38571649d25c21b86e5a572d8848",
".git/objects/76/b59e8731e5c2b7755878c3984076893963cd15": "5635dd80c39aa70270dec4ad2cbf6201",
".git/objects/78/621b9c6a225b258cfebde794e9ad303d8ea5da": "10615b0d2bcc9f9b45ed32b4b7836125",
".git/objects/79/92b372b50a1a716ee085305313803059bc2984": "9fa657dd070f3ead06028b19d0e9a5cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/1f9087f8bfa1114c1b8c2a9a47e1bcb6aa2871": "4b4c1b63270fd29dededd7983c7401fe",
".git/objects/7c/28444b99bc133a9e5469b93cd16751dce51a24": "16a8b68399c3409f591cf31aecc3e4c2",
".git/objects/7f/166a2360bac0fd3a89d08d169792050d103014": "b877e94d19bf5fbbee7b8d0ce87ac4ce",
".git/objects/83/3a048a1368e6288ce4709ff46b0e9ce07b8e45": "5b63d869eec7908fa232d3f5f07600b2",
".git/objects/84/18cb672407644ede6f7b3e2c4283da75f35ed1": "9902ea7592385f8c14810aae9542eaf1",
".git/objects/86/a793749a6676e6a167bf3b5b6140b807315ab1": "300c0854c4730b0b6a8c0066774b4ff2",
".git/objects/88/3c82c66fa633a389d1f6b6c5a316a9d76b7688": "9659096617de43082c6dc821dcda5388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/fb3a08b68121dddbe9e70dd5894eb7c3443bff": "08ea15ab13e30c7a55e8b02a6cdbd2f1",
".git/objects/8a/389615052fb698b1d4307a7cb3cc2477935634": "2e7145749fc70f243c7fce32499b02b9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/03b44cd217a9cac9e608565a496c191f82e9fc": "97220aa9aef6339bb4ba40d828821176",
".git/objects/8b/42299769fe6cbc46f8d12d59b25e45d2596ef9": "cbd4f43b15523334bb5a3eb8cefbbc29",
".git/objects/8c/c57968c221690fc6ead1196d6904d5f58437b3": "79b0e9b37da458a88765a8301b281c25",
".git/objects/8d/8c5dd4b30004b26cfdda835364a9d83ba39fad": "48326d59492b92470fba3f6fcbac1986",
".git/objects/8d/d3d3ee223ccdfbdbde2ee95c12bcdedca33ebe": "3444a7686353e9e43684b042bd2ef9ae",
".git/objects/93/cbefc5f784d740fc66140fb0c8029585321d71": "9b934214fb6c4937fe0aa9a722fc8f73",
".git/objects/94/b24d20479154c27949c5254f827a1f534fa184": "e4f03ca9d175ddf603b6c522b1fd117c",
".git/objects/95/0f69c026ad71d0436e1e52e3ebbc20a962a8c7": "b603a3a090e7b0d9e7cbaf223dda6b41",
".git/objects/95/2c0062d6692410a6a8ad67f5032e5ea7d0e1b3": "ce477bcfddfcd69356a1d848e68f9b2d",
".git/objects/95/c5e172d83558c835bf66649c2667a1f89b3d9b": "4f73e9713bfffbdeaea4368da9b467a1",
".git/objects/96/9bee5c9b0d5585f041e2dbb87ee72749864645": "c04b40d91451e5f5d91d2a02465da396",
".git/objects/97/39ab6e6c4a61b0641383bd0c12f8e4671ba903": "f449bac6e5b72ed594624cb228c068ed",
".git/objects/97/cb239c562c6df0ca7f90e93b494f3c9720e2bf": "af5312e3447d2ffa6261e75014528c7d",
".git/objects/9a/4a2acfdeeee8cb60592eb041b06955b0912afa": "8cfc5abc7d020876c5a1cb999ae94fb7",
".git/objects/9a/a68bb6b1fb84660954f138a67f982bb3dedd16": "55b8792ee0b8aaa7732455f13a56c1e9",
".git/objects/9e/21d6002232dbe60a98e8cee0f7c8e75afb592a": "558c63a7b7f2f67953be5a4dd027c23e",
".git/objects/9e/e9e5c56b13dbcd0673556421c00145c1a090d4": "bbdbb9824e3666a93eb9b210595dfdf7",
".git/objects/a0/117ab03dc027ba06a751f1121c0569048bbdd7": "3215cb3a88f21dd23994f980dc923674",
".git/objects/a0/f336f9f7884f88efe636a9880877961b4b3543": "987cd869ee1e7d0ba182e8d4c0adfa2a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/5945862a5fc55014d905dc331f9738bfb72673": "5e113abfba9bfeac13bab60883c5d905",
".git/objects/a2/bfa1a1224298dafb3f54abbf0c76183bfc5f13": "26fb598866addf5ff88c800884e7721b",
".git/objects/a4/49ed831dba71b8560c662df0d8ac7e99ece6a0": "c21e623747f6750c4abbe06908c275a4",
".git/objects/a4/84019e5633354cfb4325304e9044d58675a61b": "b2cd0e4bc759db84f9daa972dea7ca0d",
".git/objects/a6/ee0e5e83bb02ec05a785e39b00a5023c8ee928": "fb8a544a322a853501bb15495903987f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/cec9c41e6666428fbc28559dd4087aae61b27a": "520d9a3437df486cf4123de6c968003e",
".git/objects/a8/e8d08ada49ee6aa664d2d91583e1e1dc79b3f2": "09ac87d0ac43fe055710f08d383349e4",
".git/objects/a8/ef8c458a2f985021f3b09efe2697b2eaac4f2b": "a83857e1cfe6f57d8b5413590e675b24",
".git/objects/aa/7dbe56508bf21c286574d328a992eb987a5f61": "be1b80cd675211c6891703d166d66de2",
".git/objects/ab/11e514206ddc28ab082d5fa2a9953601a27c04": "6b5d607d2b60c685ce8a7d716e5d00bb",
".git/objects/ae/0cf1c7ed01f7779d582e2c68ea8e49d2a9b98a": "73d71267335339558cb2f289740db4b6",
".git/objects/af/0d94c2d60006c090dcfaed4e19b03b85dcabfe": "b09846e606605a1a79c644dee4b7821c",
".git/objects/b0/95721fadc7ec69c4276cea449c58662641e7ff": "37c2aeeca1cc6e17f9eb810dca3dd6da",
".git/objects/b1/9fad4e20df0b1894be889d5f1d7de080bba61d": "a9e3e75e86a903d628aa913693974694",
".git/objects/b2/7d0cdfc8b010df67618a3b021893f32eca17c8": "6614df8f7e2bf0c270ce7979d2dc7d21",
".git/objects/b2/c2643ef9228b1118199047d4ca5ea53f05685c": "54596e2facedbf59bebb9b01c0ccb367",
".git/objects/b4/084cf7d80b6564559dd41faf95941b20d4a69a": "a25f0bd5b03de0c2e012061874f53719",
".git/objects/b5/34e62892876c74035f6111e4dcbfbf38a6a119": "5c6e572104fcfc59b1eb6ce39a2b4a01",
".git/objects/b5/ee0fd72929e64b3e47ae66267ee5df938c4bd5": "5970156d7d00a75197554822c7cef583",
".git/objects/b6/e77449e4f9fae31f724a7ba090a7d49351a1df": "d1cf11cc6a3c32e12d6de3ba437ac610",
".git/objects/b7/051a090a6786f1ce0c9855f7b822713298cc83": "32c395efd355de9bb8b5efc40a683e41",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/86d4c178b085cb86a7026fafcdbe3718b16d39": "575e9dc23b7b859bae2f312f1a00c66b",
".git/objects/b7/bd1c0bd891baae4c2b605032d4e70c312e8db3": "89599579df9ea840bcfb47b41f87ba03",
".git/objects/b9/0e8ac594c282fb54714334688410a603822380": "2dcda7dc0d12c9278b7e8c7f992f8807",
".git/objects/bb/35305d59001b88d5115ab44774318b3a7b16e3": "9a22b60bcc91a4f2c5e012e5fe7fcc21",
".git/objects/bb/71b934641fc4b12bbb2f5ccb28ee3d8bcbf7ed": "f7653461940899b610c5b7f6a031203f",
".git/objects/bc/90d51cc1cedfc8cdbc779a3bf09ec4d73f60ab": "b157ae8de4b89a9fe7969ac749a72339",
".git/objects/bc/d4f2da1df55dba1bb320eab98be1041477e22e": "2eaf758da852d246648463148ec16b82",
".git/objects/bf/cb4ffa65574f24345d2f9eaa419c61ab83a133": "562e5a434019fa308efa421288cfd11f",
".git/objects/c0/94f80ec2b3abb295fe6f99c0b3aa9e985ec487": "2adb9dc6d266bea1f063b4ddb3110685",
".git/objects/c2/62eb0c02194a5a14ced4afa37e26444d4ec18f": "f2d6049a1d523e40909723aba2015c3f",
".git/objects/c4/f3c2f6d603d97693438782c7c0fb89cfa44d53": "c0a0957913d632afdf396725df75dda0",
".git/objects/c5/892e2c2c3dd19404c69165407d02a846a9b4d0": "9e9cc1b36ae56e03fcb91c796ac2c6fc",
".git/objects/c5/e5f00d8a1665dfc0861a30d475178afe91c5d4": "1e775b4487002df34b63a309288e9878",
".git/objects/c6/1d4b32b6eabeee4cc61055be86021216c5bd4f": "e6341590f87d27ff4461cd4142da8cf4",
".git/objects/c7/00251aa0d9440f8522e3f8299d331dc70f4faf": "8c4d92601353a4b9b7a3446b840a1d6a",
".git/objects/c7/b1b6fb978e750741bcc8f004d1524ef37522a1": "200acfd4f2ab594f2124432974b4349f",
".git/objects/c8/e1e2c873d743bbfdc8f2b059bd12a88586ed29": "eb04791e4b04860a6fc563e0b57e654a",
".git/objects/c9/9d18be114eded7cee81dc204e5b386323e185b": "3c21bf18c73994d543ec8ec165d112ac",
".git/objects/ca/2b34ac5240cbcb898709cbcd66d9ce8066554d": "c3c3fdaac1be8e13c81a11bad578c8d6",
".git/objects/cb/f65d4163206c17b39e49dbe902cd8162d7468d": "bcbb1ae933b46652401211455d629b47",
".git/objects/cc/7ec78139b6d88be91876c7953f82102a99317f": "51136715061f23a42ef5bccb9f017fb0",
".git/objects/ce/3ec13d1556ed99e3ae473a367aa6a47441c9f4": "314611807c7796f5e939e301314148ff",
".git/objects/d0/0964ba35c164ad4582a7136adacc06f47e53f5": "7f7d3d32e6b4a9759a94ca7649257ad2",
".git/objects/d0/155124915a88de8325dc134044e246b8cca06c": "71fa7f58e0c9448cb6c78ae573feca9c",
".git/objects/d2/3aefb6181992aa9c7159027db3b1f1c0d3d133": "3de6148d7287e14a77d74b82ebab2535",
".git/objects/d2/589572b2702517cd33c2eb7ae18fb88e1efec7": "7b7b714094897380790c2b21fd3d2d37",
".git/objects/d2/972e661af17464ccc33ef2b688198af99eb135": "5a37cf3aebc79ee914f2bdcefae4b35e",
".git/objects/d2/cfcfd5709c9170faa84cb5291926e2f2d2242c": "83a0fccc993ca415fce37df51153e6c0",
".git/objects/d3/399ca9270fe3d2ed90c7601bbefbffc49180ad": "bcf112041f8670aebc1bb1faf5298660",
".git/objects/d3/c27f12346957455830463f369e3844463adc44": "943c513f753f1393de575db866ea6d6a",
".git/objects/d4/27c9c8813fa76c2d93d67cf4d6dcf9ebcc07e6": "5e07a07944df722736780135faf69fa6",
".git/objects/d5/0ff2c64a54e9e5df8e5a1e31bce6fe112b57a2": "7c5f180df9b52352356fbc544d83c518",
".git/objects/d5/9bdbb303b09598adad879ff25a893f97f2c6f6": "ab9e8188514e5d304ae32f48d7601e65",
".git/objects/d6/5009e8e26f6e4388ecad7dc65a85ec46d01489": "8f8befa55ad1264cd1574db4648f7eac",
".git/objects/d6/57c5354f780ca29baa6d56b884564fc75e1206": "6eef86b975a723ea447c4892af5d947d",
".git/objects/d6/6461e5ad5354f780ecc24d6c2fc2f2a35041fa": "a0679a74e39cee062b2b330c7fc1f394",
".git/objects/d6/6a95044cc014e580cf4a511a17d50d692b2eb6": "8cd7331649b5a8d104b957b53c17c45b",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/b9bd11cd0c2a0f4be97309b3f081791cad15d1": "0efdc06596e87a0778b094b5e14692f7",
".git/objects/d9/7a123dcbf6f8a7e0d6d804fa88f8ef8e63d1ea": "eaf5721f2c07b6cfef4a44e858b03760",
".git/objects/da/6d428dcfdbc49bf9cfbe076ae190f774e85838": "0c7bd2a3ec60054af509832b68907ebf",
".git/objects/dd/30c02fe4140438e63ca22a6403c0eb387db212": "66723b0ab9cc6de32a04988aef6ab765",
".git/objects/dd/dcbe64d4af0ee56e2ecf5527f0cb25bf61ee57": "4085dad614d9b8e9906f91e45f320bb9",
".git/objects/de/c72efa0c9199656422728974bf13fa40ecb85e": "d8079c7ef8d5d4cb4722d9f30f9eb449",
".git/objects/e1/088af7b7cd185c7922bd11e1cee7cd7e77e40d": "e83ba7663ad03d3d9109ffa00484fddf",
".git/objects/e1/4a8be05a28da9aaf22f9582e4cd635feaf4860": "68371614ddd20f51c2a3f07cbd1cf4d2",
".git/objects/e1/d39b400ee98e781a7e706840eef488d4857404": "6fa3862ac334a54bdd40d8df12d4979e",
".git/objects/e2/ce346edfb01b6d9ff6468eddcd8a988673fb31": "b1e6cfdd0dcebfc7761b1312e654d2b2",
".git/objects/e3/3baeaecd6ccd853259a472defda2f21fa7cdd9": "2b06d569a135282da885cfb3c946887a",
".git/objects/e3/560b2d8ad95b9dafeaaeabe3c5088dc828eb4b": "143d6d3287014840f41a3808337c6030",
".git/objects/e4/8a04099698d6ee961f9029b2b3fe97e6f00136": "2d42cf8607cf95bf12095e83d1aad146",
".git/objects/e4/e7b22cbb95eb2a8d81dbddeb873178597d1913": "10e6e80df2a6a5afe9ed499095cca602",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/e89293988f31b7cb2cf5ed8e2269e69d707fcc": "31fb13269312130597e4e96c16f3e7c6",
".git/objects/e6/48a2131c13645ae88ddbe0e9ea5dfeac9a7b72": "37d33959dff632332ec3de93fbe3f8db",
".git/objects/e7/02d63f0a36e007b6db723c7e0e77eb940a2ee8": "a99c60fd021c7b44b9dd0d56c71fd722",
".git/objects/e9/11bf0d43718a1607878d0ef403f2082d41f96a": "10be0640dddebaf2a62f28500222bc67",
".git/objects/e9/c3de49b3cabdeeb97a3cf6934fe4b787e176fa": "90d63c4ed9950d9c924d297528de4161",
".git/objects/ea/968ea974e30ba483a5365cf8fab5bd1068ee65": "4fd8af6484d6827eea3fca51532dd467",
".git/objects/ea/d890536eddcd4cf47e35ace2f97df2a9c0897e": "5dfa49d8fe44b0a363a7b8dbc60f68b1",
".git/objects/eb/f3905cb5ae79e3213644f5c471916f1dd36a49": "357b8d94905ba4e09747d5e316b87bbf",
".git/objects/ec/069e65b05ac04f3ad26c7563b94ab88f5f8c3d": "dd8a521a2b28a1b2083f974691369bb9",
".git/objects/ee/19a7c81d8b22383df496194bc5de4df1ef26f6": "c06e3f880651df2eb63fcf9f92e4a7f8",
".git/objects/ee/4853ba25e9ce189ace4c1fd6c44b82324bf5aa": "273534e649beca8ee37b27e04c0e589d",
".git/objects/ee/6bc26e34c1e839edb58f8ad3aa7269a6aa9595": "7f9382e85aad897dd8777fe3c0a712dd",
".git/objects/ef/0074d1b181efdd0cbdc0e0624dba84e8011c8a": "5075af26f184db0c78f1f15091849599",
".git/objects/ef/5160f00d6f014496f22268c0910760659dfbde": "ca76689f042c25347a93165dbaee137c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/a3c5e80abb4efd4be84f22aa6d0541550bcfbb": "3f15b3bf5377c68ebff3991189e0f23d",
".git/objects/f4/4cf070736101b7e03cf79cad6a576127b09090": "419cc5bd3eef01ffbd849dea2d839312",
".git/objects/f5/45dc87cc7cd2b8a909a4dec40f216bbe2b87d6": "fba03115ede11d4fc050ed60fe335b4a",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f7/1779a46ef108eb95dc5e2eb4eb73afd7cc7c41": "86d8240ed44059da3dadf222faee5e4d",
".git/objects/f8/a061269871a5b4a0a4f2fb991bb2e4a3f152dc": "51127ee7886a321569912566b5311e6b",
".git/objects/f9/948a6b547af188844ba7c53413a073c946c759": "a2d78ccbb4124f6f9fb461a96d9d444b",
".git/objects/f9/95c2a241656f6ddbb9a7352b84d890535d1a7d": "e2069b81dfe7a5bb80b815de230057e9",
".git/objects/fa/38aaa51bcc71813b925b6922907499d77efb35": "fd93e964f8b13159ce5eab90aa0acaad",
".git/objects/fb/40fdbd6d0358c82cda79022beb0777109fc13b": "c7855c71c7c3e389b781e6c9c3abb9a3",
".git/objects/fb/cf4ace0ba57ceb52eaa1991e08d76be050ca72": "8c292ef5dbe77879b95b4c54c75189f5",
".git/objects/fc/462f1dcfcfff81d126c628b27f21d524890050": "e3ff07bec8d098e44f1dd72dcc51ab38",
".git/objects/fd/1eab7d2ae4a7b6c54c6fe6479a80c8f91b66cb": "08fe70aa5d9349f953581a7412db566a",
".git/objects/fd/f42069766281100467dfafc0ca0be5f1b3b77a": "8d33d16351a481150e83e71c524299bc",
".git/objects/fe/7af07c65eacc13f87fbbfb08a5b460e6b48d67": "cbe62df60756738220755146439826b5",
".git/refs/heads/master": "fa708ebc5d21f04f48db33aa55da69fb",
".git/refs/remotes/origin/master": "fa708ebc5d21f04f48db33aa55da69fb",
".idea/misc.xml": "e5df3c7e96f18fd4cc1091632c4e17d8",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "13fc255045de420a667cda3e546c2852",
"assets/AssetManifest.json": "bef45609e99bc643421041bed86f7000",
"assets/FontManifest.json": "2d43ed836655403addc59fc841c7afbc",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/assets/fonts/AppIcons.ttf": "19384566c6b9f41c058a60a7df5c9e1a",
"assets/NOTICES": "c9a0f2ba5451d6d4ae77486522f06fd3",
"assets/packages/commons/assets/images/empty.png": "95fea0110ac9fb09c2c68b37213364fe",
"assets/packages/country_pickers/assets/ad.png": "8312ea200df9dd539e27c116939db42c",
"assets/packages/country_pickers/assets/ae.png": "7ff210c9d922e6047b30241b5176948b",
"assets/packages/country_pickers/assets/af.png": "4b0f402972e53c96146b67d621682070",
"assets/packages/country_pickers/assets/ag.png": "45b17f619e8d2d3321fe031c4a90691e",
"assets/packages/country_pickers/assets/ai.png": "7112379111bbf96dae31e0b13a62b926",
"assets/packages/country_pickers/assets/al.png": "675265e7b86d00e3aa6f25bf64a4dab9",
"assets/packages/country_pickers/assets/am.png": "55d71092c291a382a8fb4e0dae4b76a0",
"assets/packages/country_pickers/assets/an.png": "2aaab4636955c0e2609ad551e8e938cf",
"assets/packages/country_pickers/assets/ao.png": "eec240bde52c32770eeacd027b193347",
"assets/packages/country_pickers/assets/aq.png": "947030b9fb778b63ab28954c545ea4c7",
"assets/packages/country_pickers/assets/ar.png": "b8a60b09d7db59ca8e34d0c391f7cf47",
"assets/packages/country_pickers/assets/as.png": "d3ee7d8aeade5f87a5ab6ea1c53c1181",
"assets/packages/country_pickers/assets/at.png": "3d36c83a3d671b11f755c891bd8de687",
"assets/packages/country_pickers/assets/au.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/country_pickers/assets/aw.png": "01f11f497399c715de5f2561b93b8ef8",
"assets/packages/country_pickers/assets/ax.png": "adc1e135fd79d41a3d968de5ec048d8a",
"assets/packages/country_pickers/assets/az.png": "98833fec449ef8d633ef934e63080891",
"assets/packages/country_pickers/assets/ba.png": "4b5ad282e533a2e75d8b6ce8cff43db0",
"assets/packages/country_pickers/assets/bb.png": "8679327e664edb5e050982e7ee0c7828",
"assets/packages/country_pickers/assets/bd.png": "0ca802e7f67045161047607b20c6490e",
"assets/packages/country_pickers/assets/be.png": "6c7022eda06794dc916358268cb08d50",
"assets/packages/country_pickers/assets/bf.png": "5746b4e7bb2c86e7a2dc5077226b9952",
"assets/packages/country_pickers/assets/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/packages/country_pickers/assets/bh.png": "7533d290739c20bd2d0250414a74c19d",
"assets/packages/country_pickers/assets/bi.png": "2c1d426f4b941b9638303c34145ba672",
"assets/packages/country_pickers/assets/bj.png": "04f9872301a332efdd91735631f3d438",
"assets/packages/country_pickers/assets/bl.png": "536f99fa693e6b52a21c67e983632092",
"assets/packages/country_pickers/assets/bm.png": "72e7fff10d3168e4c62bad5465598db0",
"assets/packages/country_pickers/assets/bn.png": "1f1c5a29f9a6fd77963f7bb3de5946c2",
"assets/packages/country_pickers/assets/bo.png": "74bac15d186993c09eecdde11876b401",
"assets/packages/country_pickers/assets/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/country_pickers/assets/br.png": "4d47e5b273c0043e76bfd6ac76c3e035",
"assets/packages/country_pickers/assets/bs.png": "0b6796dfa9a54bf9c6473a005cc7f687",
"assets/packages/country_pickers/assets/bt.png": "43e973113f8c57a5cd303a49b5f371da",
"assets/packages/country_pickers/assets/bv.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_pickers/assets/bw.png": "d50ac293dc1f0534aedb989c8ded82c0",
"assets/packages/country_pickers/assets/by.png": "c5d14943250d54b4a630794c5648c687",
"assets/packages/country_pickers/assets/bz.png": "3b84100ca29a0bc77474677e9da6fc0f",
"assets/packages/country_pickers/assets/ca.png": "e20a51380b2da69353e3755edead340d",
"assets/packages/country_pickers/assets/cc.png": "5d1c266d4620dc7203023882a7b647e5",
"assets/packages/country_pickers/assets/cd.png": "f0b60b807ec62ebfc391ff50c79ec30e",
"assets/packages/country_pickers/assets/cf.png": "acb28ea1b07b24c3e4984a6698faef24",
"assets/packages/country_pickers/assets/cg.png": "502df6404e41cb76d033af895f34eb2c",
"assets/packages/country_pickers/assets/ch.png": "fe8519b23bed3b2e8669dac779c3cb55",
"assets/packages/country_pickers/assets/ci.png": "a490576a22f2c67f1d331cbc5098f5f1",
"assets/packages/country_pickers/assets/ck.png": "882bc3896cdd040757972bcbbf75e4bb",
"assets/packages/country_pickers/assets/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/country_pickers/assets/cm.png": "12c2c677c148caa9f6464050ea5647eb",
"assets/packages/country_pickers/assets/cn.png": "26c512b86a77d796629adf61862475ac",
"assets/packages/country_pickers/assets/co.png": "37dbdf7ef835ea7ee2c1bdcf91e9a2bb",
"assets/packages/country_pickers/assets/cr.png": "40dc5bc52eb9391bd6d1bf895b107a65",
"assets/packages/country_pickers/assets/cu.png": "82ec98ab8b9832e6a182367a5dd16f93",
"assets/packages/country_pickers/assets/cv.png": "a5193806962944dad9ee6c9c91f5cf10",
"assets/packages/country_pickers/assets/cw.png": "7132ff340c5f3fef7f163b60f2c841e2",
"assets/packages/country_pickers/assets/cx.png": "d5a6ca51e490d03b06a647d652d3fdb0",
"assets/packages/country_pickers/assets/cy.png": "f63fce2edfbc2aac831d6934e82a336f",
"assets/packages/country_pickers/assets/cz.png": "9e16a631c6e170d3415c005061b1e5da",
"assets/packages/country_pickers/assets/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/packages/country_pickers/assets/dj.png": "6816bcba85e0179c4c1fafb76f35cd93",
"assets/packages/country_pickers/assets/dk.png": "2f452388777897cd70a25b1295582938",
"assets/packages/country_pickers/assets/dm.png": "013b44702a8fb5773a0983085b0dc076",
"assets/packages/country_pickers/assets/do.png": "e625b779a26a0130150b0a5bafe24380",
"assets/packages/country_pickers/assets/dz.png": "7372cc9383ca55804d35ca60d09f2ab9",
"assets/packages/country_pickers/assets/ec.png": "746ed5202fb98b28f7031393c2b479da",
"assets/packages/country_pickers/assets/ee.png": "69e0ffbab999ade674a9b07db0ee3941",
"assets/packages/country_pickers/assets/eg.png": "97843ac1dffee8cf3b3e7b341a38893e",
"assets/packages/country_pickers/assets/eh.png": "f91039d93b511ab8baba3a6242f21359",
"assets/packages/country_pickers/assets/er.png": "300cbfb7dda5e2eea87e9b03660a6077",
"assets/packages/country_pickers/assets/es.png": "a290e5120fe89e60d72009815478d0d3",
"assets/packages/country_pickers/assets/et.png": "7bc0f7bd7b4c252b375fc5bd94fe6a3f",
"assets/packages/country_pickers/assets/eu.png": "38336a6139fea0f3e2daa5a135e70d1d",
"assets/packages/country_pickers/assets/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/country_pickers/assets/fj.png": "7970a279e5034d20c73b904388df7cba",
"assets/packages/country_pickers/assets/fk.png": "d599200dd54a121ac54e4895f97f19b1",
"assets/packages/country_pickers/assets/fm.png": "03c6a315c3acedae9a51cb444c99be5e",
"assets/packages/country_pickers/assets/fo.png": "ccd988f6309e4245cfa36478e103fb9b",
"assets/packages/country_pickers/assets/fr.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/packages/country_pickers/assets/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/country_pickers/assets/gb-nir.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_pickers/assets/gb-sct.png": "d55a9a9d41e9dc61cbeef059519d5618",
"assets/packages/country_pickers/assets/gb-wls.png": "74e73d030683c21d2183d92025d11be9",
"assets/packages/country_pickers/assets/gb.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_pickers/assets/gd.png": "7d4b72f73674133acb00c0ea3959e16b",
"assets/packages/country_pickers/assets/ge.png": "3fb1b71b32fb6bbd4e757adba06ce216",
"assets/packages/country_pickers/assets/gf.png": "4004b2e3ec6c151fe4cb43e902280952",
"assets/packages/country_pickers/assets/gg.png": "0a697b4266f87119aeb8a2ffe3b15498",
"assets/packages/country_pickers/assets/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/country_pickers/assets/gi.png": "987d065705257febe56bdbe05a294749",
"assets/packages/country_pickers/assets/gl.png": "fb536122819fd1d3fc18c02c7df93865",
"assets/packages/country_pickers/assets/gm.png": "be81263dd47ca1f99936f78f6b5dfc4a",
"assets/packages/country_pickers/assets/gn.png": "30b014c10d88f166e4bfd46bbc235ebe",
"assets/packages/country_pickers/assets/gp.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/gq.png": "de93250a1de5e482f88bc5309ce21ac0",
"assets/packages/country_pickers/assets/gr.png": "ed1304c7d8e6a64f31e7b65c4beea944",
"assets/packages/country_pickers/assets/gs.png": "191d4b79605c08effa5b3def9834c9d6",
"assets/packages/country_pickers/assets/gt.png": "2791b68757cd31e89af8817817e589f0",
"assets/packages/country_pickers/assets/gu.png": "7e51aa7e3adaf526a8722350e0477192",
"assets/packages/country_pickers/assets/gw.png": "806f63c256bddd4f1680529f054f4043",
"assets/packages/country_pickers/assets/gy.png": "64f3007da6bdc84a25d8ad6b5d7f3094",
"assets/packages/country_pickers/assets/hk.png": "69a77d8a25952f39fe6aadafb6f7efc2",
"assets/packages/country_pickers/assets/hm.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/country_pickers/assets/hn.png": "5fcf2451994a42af2bba0c17717ed13f",
"assets/packages/country_pickers/assets/hr.png": "3175463c3e7e42116d5b59bc1da19a3f",
"assets/packages/country_pickers/assets/ht.png": "a49a27479ed8be33d962898febc049f1",
"assets/packages/country_pickers/assets/hu.png": "ff1d0e2bc549da022f2312c4ac7ca109",
"assets/packages/country_pickers/assets/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/country_pickers/assets/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/country_pickers/assets/il.png": "ee933479696b8c80d2ade96ee344a89c",
"assets/packages/country_pickers/assets/im.png": "d3da8affefefe4ec55770c9f3f43f117",
"assets/packages/country_pickers/assets/in.png": "0f1b94cf838fa1b86c172da4ab3db7e1",
"assets/packages/country_pickers/assets/io.png": "d4910e28f0164bc879999c17024d543c",
"assets/packages/country_pickers/assets/iq.png": "9434c17a6d4653df965e3276137764a1",
"assets/packages/country_pickers/assets/ir.png": "5d8864e2235f7acb3063a9f32684c80e",
"assets/packages/country_pickers/assets/is.png": "9fce179e688579504fb8210c51aed66d",
"assets/packages/country_pickers/assets/it.png": "ff7064f6e37512ff41e665f3a4987e70",
"assets/packages/country_pickers/assets/je.png": "6fcdb123f8bf3cafea5537542018b151",
"assets/packages/country_pickers/assets/jm.png": "87dbf861e528586787fdf8b6617e2f61",
"assets/packages/country_pickers/assets/jo.png": "79a73b63a1e0d78a08da882b146a2224",
"assets/packages/country_pickers/assets/jp.png": "fc7c3eb4c199252dc35730939ca4384d",
"assets/packages/country_pickers/assets/ke.png": "3e54059985907a758bb0531a711522fb",
"assets/packages/country_pickers/assets/kg.png": "e0eab32f37a96e43df134e70db49482a",
"assets/packages/country_pickers/assets/kh.png": "25e4099457402866cc1fabcd4506c6cc",
"assets/packages/country_pickers/assets/ki.png": "a93bda4f0f004d9c865f93d25c81ce18",
"assets/packages/country_pickers/assets/km.png": "c631326a464f21c51fbfd767be9bcf39",
"assets/packages/country_pickers/assets/kn.png": "11889e3432a57b8327eaeb5f34951db5",
"assets/packages/country_pickers/assets/kp.png": "8fcc8f2fc646b484b4a47cdc0ff21cab",
"assets/packages/country_pickers/assets/kr.png": "f36e020411beb5d89c1accce5acb1dd1",
"assets/packages/country_pickers/assets/kw.png": "cac0e665bc61366ffeb1cb08c24b609b",
"assets/packages/country_pickers/assets/ky.png": "bacc27cd23c1e359244533ecb9043de6",
"assets/packages/country_pickers/assets/kz.png": "caba66830ed539d3f86431ddf4006e72",
"assets/packages/country_pickers/assets/la.png": "ab542ca6e9c4e1911e70cb6178dd64a6",
"assets/packages/country_pickers/assets/lb.png": "30e7e0ee297d535bed953d7ad3321c6f",
"assets/packages/country_pickers/assets/lc.png": "32e5433954c7a99cd53c1e67f2ac604a",
"assets/packages/country_pickers/assets/li.png": "1abb7f4421487e6f40007c97ccf98c3d",
"assets/packages/country_pickers/assets/lk.png": "b7ab4259e284bb6f4f30cb8ec5e9b1b6",
"assets/packages/country_pickers/assets/lr.png": "ef37f094c6b37fbd2343bc800b2a35e5",
"assets/packages/country_pickers/assets/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/country_pickers/assets/lt.png": "d79eb564dd857c66ddd65a41f4cdfe4e",
"assets/packages/country_pickers/assets/lu.png": "31349218e6c2a6e900a3a83baa8f61d2",
"assets/packages/country_pickers/assets/lv.png": "4370f6f09eecc21db000bd09191f3ff3",
"assets/packages/country_pickers/assets/ly.png": "c6d7280c521faa563e07b1f8bec1d9b7",
"assets/packages/country_pickers/assets/ma.png": "2302b44a7fe96ca595ea9528271a1ad9",
"assets/packages/country_pickers/assets/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/packages/country_pickers/assets/md.png": "d579fff3f3b7644d54cdad3fbcdd501e",
"assets/packages/country_pickers/assets/me.png": "a2ca2c8d5567775b6f00634bcdb7a6f9",
"assets/packages/country_pickers/assets/mf.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/country_pickers/assets/mh.png": "575772c6fb22f9d6e470c627cacb737e",
"assets/packages/country_pickers/assets/mk.png": "b84591fe5860ed7accf9ff7e7307f099",
"assets/packages/country_pickers/assets/ml.png": "82bf0ca0c67d2371207a540b40c320fc",
"assets/packages/country_pickers/assets/mm.png": "0073e71d8d7d5c7f6ee70c828be1b7c8",
"assets/packages/country_pickers/assets/mn.png": "22d7616bc740394c5ae5b384bf2ef225",
"assets/packages/country_pickers/assets/mo.png": "08f0124b030743d010253d0108ef3b7f",
"assets/packages/country_pickers/assets/mp.png": "895e2aea9e8a9fb4a3db09ba75b2ae11",
"assets/packages/country_pickers/assets/mq.png": "394a6076943d6eb57ee10c7f2e044e1c",
"assets/packages/country_pickers/assets/mr.png": "253fc7fdd3d3360dfd2e8d726a3c27f7",
"assets/packages/country_pickers/assets/ms.png": "438b3ae48465543239a679ef915378de",
"assets/packages/country_pickers/assets/mt.png": "2c20ed4b1721ad71677d7e26f95425cd",
"assets/packages/country_pickers/assets/mu.png": "f00d3c927769eaf3bbc4d2c249ea3418",
"assets/packages/country_pickers/assets/mv.png": "8468c7f25a4b5dc7403146da72bd8126",
"assets/packages/country_pickers/assets/mw.png": "47fb9232df51b3a1de93fda80a795163",
"assets/packages/country_pickers/assets/mx.png": "7e557bb1bf47d52b6f3820e647fa5f98",
"assets/packages/country_pickers/assets/my.png": "e7fc1cb576089cfed2e7fa8071af4cd8",
"assets/packages/country_pickers/assets/mz.png": "3bce789f6780525f09212b677239f2d5",
"assets/packages/country_pickers/assets/na.png": "2431d5e2158f15bbcbad8e57bb78f25d",
"assets/packages/country_pickers/assets/nc.png": "b94385d139bf8b82b5b3f20559feece5",
"assets/packages/country_pickers/assets/ne.png": "89c2cbd76d15ae5c43f814b5ef5010dd",
"assets/packages/country_pickers/assets/nf.png": "4a9944f819ff0fc923f619184ae3c6df",
"assets/packages/country_pickers/assets/ng.png": "eeb857562b3dfcd105aef9ec371a916f",
"assets/packages/country_pickers/assets/ni.png": "41e2831687e9997fa4d5f4eb0700cc84",
"assets/packages/country_pickers/assets/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/country_pickers/assets/no.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_pickers/assets/np.png": "99ba0ec8de01de3bc62146b2ffd1f96e",
"assets/packages/country_pickers/assets/nr.png": "c96262cfab530f60649c118ad21ab65f",
"assets/packages/country_pickers/assets/nu.png": "146c66c2ede3bd38ec680f76ef6525a0",
"assets/packages/country_pickers/assets/nz.png": "d22c137d0038c20c1fa98ae2ed3729b0",
"assets/packages/country_pickers/assets/om.png": "b16ebc34417eb7a6ad7ed0e3c79a71c0",
"assets/packages/country_pickers/assets/pa.png": "3215dc6016afeb373faacc38ee34b3d4",
"assets/packages/country_pickers/assets/pe.png": "b722a28a444000bab6cd03e859112e42",
"assets/packages/country_pickers/assets/pf.png": "33211a88528a8f7369d4bf92766131b2",
"assets/packages/country_pickers/assets/pg.png": "96c8233f13b1f4e7200d6ac4173de697",
"assets/packages/country_pickers/assets/ph.png": "158bd50b6f2d18f398e8600f6663b488",
"assets/packages/country_pickers/assets/pk.png": "c341fe3cf9392ed6a3b178269c1d9f0c",
"assets/packages/country_pickers/assets/pl.png": "e8714e9460929665055f1c93dce1bf61",
"assets/packages/country_pickers/assets/pm.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/pn.png": "0205d0644f1207674c80eef7719db270",
"assets/packages/country_pickers/assets/pr.png": "b496188f51424a776d7ce5d8e28fd022",
"assets/packages/country_pickers/assets/ps.png": "e3e006d28f6b72169c717c1dba49b4d5",
"assets/packages/country_pickers/assets/pt.png": "1fe8c12d96a7536b0aa25a9ca7d3c701",
"assets/packages/country_pickers/assets/pw.png": "5216b69d6d8cb4e50962f8a6531231e8",
"assets/packages/country_pickers/assets/py.png": "4dca66b598604fb3af9dee2fd9622ac4",
"assets/packages/country_pickers/assets/qa.png": "3ed06ed4f403488dd34a747d2869204d",
"assets/packages/country_pickers/assets/re.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/ro.png": "50ada15f78e9828d9886505e0087cbfd",
"assets/packages/country_pickers/assets/rs.png": "0a4c07a0ac5523d6328ab7d162d79d1e",
"assets/packages/country_pickers/assets/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/country_pickers/assets/rw.png": "f6602a0993265061713f34e8a86c42cf",
"assets/packages/country_pickers/assets/sa.png": "60851afd0246c77b57f76f32e853c130",
"assets/packages/country_pickers/assets/sb.png": "12cccb421defca5c7a4d19661f98f06f",
"assets/packages/country_pickers/assets/sc.png": "fce9893562cbe99d2e62a46b03e42007",
"assets/packages/country_pickers/assets/sd.png": "40572a05b7cd8ea53cee59c6be331588",
"assets/packages/country_pickers/assets/se.png": "775da17dccf0768a1f10f21d47942985",
"assets/packages/country_pickers/assets/sg.png": "fd3e4861be787cfde6338870e2c8d60a",
"assets/packages/country_pickers/assets/sh.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_pickers/assets/si.png": "9fa57dc95640bcd67051d7ff63caa828",
"assets/packages/country_pickers/assets/sj.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_pickers/assets/sk.png": "207097f7d7d1ab9c7c88d16129cdba39",
"assets/packages/country_pickers/assets/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/country_pickers/assets/sm.png": "8615f3e38ee216e53895ac9acd31a56b",
"assets/packages/country_pickers/assets/sn.png": "1e8f55378ddd44cdc9868a7d35bda2fe",
"assets/packages/country_pickers/assets/so.png": "2a29df9dfbfbe10d886f1f6157557147",
"assets/packages/country_pickers/assets/sr.png": "b9e4b7fff662b655ce2b41324a04526b",
"assets/packages/country_pickers/assets/ss.png": "bfc79aa44e6d2b026717f7aae4431639",
"assets/packages/country_pickers/assets/st.png": "5abecf1202ef9f7b33bdb9d0e3913f80",
"assets/packages/country_pickers/assets/sv.png": "abe677facaeee030a10987f87831ee53",
"assets/packages/country_pickers/assets/sx.png": "aee87f6ff085fccd57c234f10a6d6052",
"assets/packages/country_pickers/assets/sy.png": "f415bf216f4c08b9a224b83165decc11",
"assets/packages/country_pickers/assets/sz.png": "a06f0fa489d9c9faf0690673242005d2",
"assets/packages/country_pickers/assets/tc.png": "0faabda1411738e572144aaeed24aadd",
"assets/packages/country_pickers/assets/td.png": "343a6c8ad0d15e0a7f44e075dd02082a",
"assets/packages/country_pickers/assets/tf.png": "cc0d9468b31855b29f38ca53eb522067",
"assets/packages/country_pickers/assets/tg.png": "a0f14f046b0356221c6923203bd43373",
"assets/packages/country_pickers/assets/th.png": "aa978ab62657076b0fa36ef0514d4dcf",
"assets/packages/country_pickers/assets/tj.png": "a9e427318b756c0c03bec3f3ff976fa3",
"assets/packages/country_pickers/assets/tk.png": "fcbceb6da21d71232ad719d05b6bb71b",
"assets/packages/country_pickers/assets/tl.png": "5519f1e7173e1f345d1580bab1b34d51",
"assets/packages/country_pickers/assets/tm.png": "9b27cae273a82e046c82a94f380826a6",
"assets/packages/country_pickers/assets/tn.png": "c375381bbdb31c4e80af18210d196d30",
"assets/packages/country_pickers/assets/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/country_pickers/assets/tr.png": "0a832c3bc7481e6b285dabbf1a119e22",
"assets/packages/country_pickers/assets/tt.png": "2633904bd4718afeecfa0503057a7f65",
"assets/packages/country_pickers/assets/tv.png": "d45cf6c6f6ec53ae9b52f77848dc6bf9",
"assets/packages/country_pickers/assets/tw.png": "079535fcbc6e855a85c508c9d1b5615a",
"assets/packages/country_pickers/assets/tz.png": "f8da3c6c3c64726ba9cb58ccfb373de2",
"assets/packages/country_pickers/assets/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/country_pickers/assets/ug.png": "3a85e25a9797f7923a898007b727216a",
"assets/packages/country_pickers/assets/um.png": "b2b35d5b34ba0d66fda92e2003cd6b10",
"assets/packages/country_pickers/assets/us.png": "b2b35d5b34ba0d66fda92e2003cd6b10",
"assets/packages/country_pickers/assets/uy.png": "2579723aba2ee05a8d68c9084eaf5588",
"assets/packages/country_pickers/assets/uz.png": "475189379e4a67b29e9ab9a1d71f3cdd",
"assets/packages/country_pickers/assets/va.png": "e84a6f9dc08930a11d1e4b9d25b6234f",
"assets/packages/country_pickers/assets/vc.png": "e6cead4282ee9e362c624b46752aa3d5",
"assets/packages/country_pickers/assets/ve.png": "c177b253feaa781aae0368ae9d55d702",
"assets/packages/country_pickers/assets/vg.png": "420edc09fba1878f87336f8ebcdcee66",
"assets/packages/country_pickers/assets/vi.png": "bfe5691810c27983346bf52eb5149bb4",
"assets/packages/country_pickers/assets/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/country_pickers/assets/vu.png": "47ba92e2fe9961be0991dc76520dade9",
"assets/packages/country_pickers/assets/wf.png": "6214b3091dbe62c7a6c9991ee6466859",
"assets/packages/country_pickers/assets/ws.png": "d8e4ad3af401330e3f11db4be39dbf32",
"assets/packages/country_pickers/assets/xk.png": "6781f6c7e81d5617769900576c85917e",
"assets/packages/country_pickers/assets/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/country_pickers/assets/yt.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/za.png": "6c93cf2398f55956549f241ef9f32e15",
"assets/packages/country_pickers/assets/zm.png": "e918e6d9756449e9e9fefd52faa0da80",
"assets/packages/country_pickers/assets/zw.png": "6245bb368a8a37c49f2e87331424c1fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8ee7e2afee61cc50792388e07d6cb0ab",
"/": "8ee7e2afee61cc50792388e07d6cb0ab",
"main.dart.js": "7dab7732521ef48a8c846397321834c1",
"manifest.json": "fb946d847de8cac162ce50fd23ea2943",
"version.json": "1c7d11560b3b0e58c5120e8186133cf0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
