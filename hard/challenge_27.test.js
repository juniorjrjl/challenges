const { getProperties } = require('./challenge_27')
const {readFileSync, promises: fsPromises} = require('fs');

describe('get properties values', 
    () => it.each([
        ['./resources/data-0.json', 
            [
                ["619459086b56da1078d3cf62","pariatur"],
                ["6194590809beac7af1db9197","velit"],
                ["61945908daa72c63c52f5917","nisi"],
                ["619459081b9359627ffb174d","voluptate"],
                ["6194590847e29864f074fd6b","minim"],
                ["61945908061bb8557d39c99f","aliqua"],
                ["61945908e0a0b705972e12e6","ipsum"],
                ["6194590890812bf4100f4e9f","quis"],
                ["619459082921931df2a2d700","in"],
                ["619459088a15378404abf511","amet"],
                ["61945908928aade5d4f39f17","laboris"],
                ["61945908115dc2018ca494a7","voluptate"],
                ["61945908df0af4bd4a7ab88b","amet"],
                ["6194590836eff3460e579dea","ad"],
                ["6194590898ebfe53111aa2f6","eiusmod"],
                ["61945908604113f3e460454d","labore"],
                ["619459083072499a9e15c0e5","id"],
                ["619459082b3120ee36002eb1","ullamco"],
                ["61945908c0026f4a05dfa60c","enim"],
                ["619459082b2187a0757bc3f1","consequat"]
            ]
        ], 
        ['./resources/data-1.json', 
            [
                ["618c602633a65eef8d166a9d","incididunt"],
                ["618c60261ec45f86b0f2a6e1","id"],
                ["618c60267a22bbc164a1ca1f","ad"],
                ["618c60269a345d2c5d093205","non"],
                ["618c6026e00028a0eecb5e7f","incididunt"],
                ["618c6026004b29de6a86c9e3","commodo"],
                ["618c60261f2b40af3f72fc10","et"],
                ["618c6026404cb1f8f8c836c1","ea"],
                ["618c60260ef2ff33ca7c1d57","esse"],
                ["618c6026c0c4bf1f7eceb8e7","aliquip"],
                ["618c60265242a17ce280fd79","magna"],
                ["618c60264aa91981fb641dd6","magna"],
                ["618c6026a5b15da35a1274a0","labore"],
                ["618c60260cf5a8d37599693f","et"],
                ["618c602600906dc4876fb6fc","et"],
                ["618c6026069ca6a43012dcd2","magna"],
                ["618c6026b2cc8c9c0777f86c","dolore"],
                ["618c602638385dd46e7b2956","sint"],
                ["618c602614ac92aaf00bfa3a","sit"],
                ["618c60264898c59023e42240","non"],
                ["618c6026719aefafe40fdc9a","exercitation"],
                ["618c6026bc3b7b80b7bf9931","ea"],
                ["618c60267dbd271dd7e26b8c","proident"],
                ["618c60268a35240a8d75a6c1","aliqua"],
                ["618c60268ff0b056951ec64c","qui"],
                ["618c602606d19ed1320083fe","laborum"],
                ["618c6026ee0fb0147481dfcd","enim"],
                ["618c602618b35dce16ec05a8","nulla"],
                ["618c6026601a92e297e30a83","consectetur"],
                ["618c6026aa8fb06a41357816","exercitation"],
                ["618c6026a3b67246dc9aa9d5","voluptate"],
                ["618c60265bc857612e17dd2b","sint"],
                ["618c6026635822092780f8f4","duis"],
                ["618c6026cfff4c7e1cfa65ae","sunt"],
                ["618c6026206b642b514488de","ut"],
                ["618c6026552023c63bed8bde","aute"],
                ["618c60263a6d2833ff4b864c","mollit"],
                ["618c60263144b79ff8078216","exercitation"],
                ["618c60264368c05e182edd60","elit"],
                ["618c6026839e89a98572d747","sunt"],
                ["618c60264a5f8510f5cdd3c3","anim"],
                ["618c6026972cf7622a8c106e","eu"],
                ["618c6026f11cd25fe384265c","ea"],
                ["618c60263e2b23d7dd3eac0e","ut"],
                ["618c60265228eea004c0bfe5","non"],
                ["618c6026070ddf3e45991960","nostrud"],
                ["618c6026f57d56275b589150","ipsum"],
                ["618c60269b45de4e20a3404b","dolor"],
                ["618c6026526cba6891ed5fb9","magna"],
                ["618c60262e9c33e82c1d770c","labore"]
            ]
        ], 
        ['./resources/data-2.json', 
            [
                ["619458ddbd252003f1af26d7","excepteur"],
                ["619458dd5f3f2c3a960699ee","magna"],
                ["619458dda33df05fe436c58b","ut"],
                ["619458dd9417574283a31884","amet"],
                ["619458dd9ee181dd0f2546ac","eiusmod"],
                ["619458dd2796c7757cac2a31","veniam"],
                ["619458dd53184c73028678a5","commodo"],
                ["619458ddf9df8810fd8c5170","sunt"],
                ["619458ddacef0c3dab263a25","consequat"],
                ["619458dd1777928fa04e4b60","laborum"],
                ["619458dde73b4388970139b9","occaecat"],
                ["619458dd06e226a24beae5d0","eiusmod"],
                ["619458dd189439491e1df67f","non"],
                ["619458dd8b31ad260f573d42","non"],
                ["619458ddb6041893a30fea6b","sint"],
                ["619458dd48b276ccd9130030","proident"],
                ["619458dda25a7c0fe57aaed5","pariatur"],
                ["619458dd1757390f0c3bb480","veniam"],
                ["619458dd53a71f4fcc175a95","ea"],
                ["619458dd0d263a6ce98be386","cillum"],
                ["619458ddfdf9d50724df374f","sunt"],
                ["619458dd44bf8866b5652f60","excepteur"],
                ["619458dde415c9477f487747","laboris"],
                ["619458ddf4941a9d14b76a27","sunt"],
                ["619458dd6cbd75199f1adbed","excepteur"],
                ["619458dd4b0eb0499db703ba","tempor"],
                ["619458dd88061d2980bd9383","esse"],
                ["619458dd7e44efe7457d5e13","voluptate"],
                ["619458dd0a87e75b6a00f8a7","reprehenderit"],
                ["619458dd37246f33d3c99afd","non"],
                ["619458ddbdfd5377b42705c0","officia"],
                ["619458dd3d3bc6fed382f3c3","nulla"],
                ["619458dd071d8a919ba4b382","exercitation"],
                ["619458dda3422b971597d0ca","elit"],
                ["619458dd0780ae5aa747f53b","incididunt"],
                ["619458dd0aef356c4c6a8f5b","minim"],
                ["619458dde07dbe408da8696d","deserunt"],
                ["619458ddd5f4e3fb33917d8b","elit"],
                ["619458ddbda92566a9429c95","culpa"]
            ]
        ],
    ])
        ('when use file %s content then output is file %s content', 
        (fileInput, expected) => {
            const input = readFileSync(fileInput, 'utf-8')
            expect(getProperties(JSON.parse(input)).sort()).toEqual(expected.sort())
        }))
