const { MapPoint, MapRoute } = require('./challenge_29')

describe('Best way to navigate', 
    () => it.each([
        [
            [
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.START, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.FINISH],
                [MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.JUNK , MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY]
            ],
            ['(1, 1)', '(1, 2)', '(1, 3)', '(2, 3)', '(3, 3)', '(4, 3)', '(4, 4)', '(4, 5)', '(4, 6)', '(3, 6)']
        ],
        [
            [
                [MapPoint.FINISH, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.JUNK  , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.EMPTY , MapPoint.JUNK , MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.JUNK  , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.START]
            ],
            ['(7, 3)', '(6, 3)', '(5, 3)', '(4, 3)', '(3, 3)', '(2, 3)', '(1, 3)', '(0, 5)', '(0, 2)', '(0, 1)', '(0, 0)']
        ],
        [
            [
                [MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY , MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.START , MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.JUNK , MapPoint.JUNK  , MapPoint.EMPTY, MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.JUNK , MapPoint.FINISH, MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY , MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY , MapPoint.JUNK , MapPoint.EMPTY],
                [MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY , MapPoint.EMPTY, MapPoint.EMPTY]
            ],
            ['(1, 2)', '(1, 1)', '(1, 0)', '(2, 0)', '(3, 0)', '(4, 0)', '(5, 0)', '(5, 1)', '(5, 2)', '(4, 2)', '(3, 2)']
        ],
        [
            [
                [MapPoint.EMPTY, MapPoint.JUNK , MapPoint.JUNK , MapPoint.START, MapPoint.JUNK , MapPoint.JUNK , MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.JUNK , MapPoint.JUNK , MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.JUNK , MapPoint.EMPTY, MapPoint.EMPTY, MapPoint.JUNK , MapPoint.EMPTY, MapPoint.JUNK],
                [MapPoint.JUNK , MapPoint.JUNK , MapPoint.JUNK , MapPoint.JUNK , MapPoint.JUNK , MapPoint.FINISH, MapPoint.JUNK]
            ],
            ['(0, 3)', '(1, 3)', '(1, 2)', '(2, 2)', '(2, 1)', '(3, 1)', '(4, 1)', '(5, 1)', '(5, 2)', '(6, 2)', '(7, 2)', '(8, 2)', '(8, 1)', '(9, 1)', 
                '(10, 1)', '(11, 1)', '(11, 2)', '(11, 3)', '(11, 4)', '(11, 5)', '(12, 5)', '(13, 5)']
        ]
    ])
        ('when map is %s then a route is %s', 
        (DungeonMap, expected) => expect(MapRoute.navigate(DungeonMap)).toBe(expected)))