import Item from "../../../../shared/ui/Item";
import ProgressBar from "../../../../shared/ui/ProgressBar";
import Select from "../../../../shared/ui/Select";
import { ContenBattlePassList, ContentBattlePass, ContentBattlePassProgress, ContentBattlePassTariff, ContentBattlePassTitle, ContentBody, ContentHeader, ContentList, ContentOverview, ContentWrapper, CurrentLevel, CurrentLevelNumber, GradientTextFree, GradientTextGold, TariffFree, TariffGold, TariffGoldWrapper } from "./styles";

const options = [
    { value: 'arcanum', label: 'ARCANUM' },
    { value: 'server2', label: 'Server 2' },
    { value: 'server3', label: 'Server 3' },
];
const optionsPeaple = [
    {
        value: 'Kykarikust', label: 'Kykarikust',
        boldText: true, boldTextValue: 'L50 [1500]',
        image: '/avatar.svg'
    },
    {
        value: 'GreenNinja', label: 'GreenNinja',
        boldText: true, boldTextValue: 'L36 [760]',
        image: '/avatar.svg'
    },
    {
        value: 'Charizard', label: 'Charizard',
        boldText: true, boldTextValue: 'L52 [1520]',
        image: '/avatar.svg'
    },
];

const mokeDB = [
    {
        id: 1,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 2,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 3,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 4,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 5,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 6,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 7,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 8,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 9,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 10,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 11,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 12,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 13,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 14,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 15,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 16,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 17,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 18,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 19,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 20,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 21,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 22,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 23,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 24,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 25,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 26,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 27,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 28,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 29,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 30,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 31,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 32,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 33,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 34,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 35,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 36,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 37,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 38,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 39,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 40,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 41,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 42,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 43,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 1
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 44,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 10
        },
        gold: {
            itemName: 'Серебрянный меч'
        }
    },
    {
        id: 45,
        free: {
            itemName: 'Бесконечный допинг',
        },
        gold: {
            itemName: 'Золотая накидка'
        }
    },
    {
        id: 46,
        free: {
            itemName: 'Бесконечный допинг'
        },
        gold: {
            itemName: 'Гильдийная накидка',
            itemCount: 8
        }
    },
    {
        id: 47,
        free: {
            itemName: 'Бесконечный допинг',
            itemCount: 255
        },
        gold: {
            itemName: 'Лицензия охоты'
        }
    },
    {
        id: 48,
        free: {
            itemName: 'Бесконечный допинг'
        },
        gold: {
            itemName: 'Капсула Бессмертия'
        }
    },
    {
        id: 49,
        free: {
            itemName: 'Бесконечный допинг'
        },
        gold: {
            itemName: 'Зелье регенерации'
        }
    },
    {
        id: 50,
        free: {
            itemName: 'Бесконечный допинг',
            itemImg: '/image(2).svg'
        },
        gold: {
            itemName: 'Зелье регенерации',
            itemImg: '/image(2).svg'
        }
    },
]

const currentLevel = 44;

const exp = 150;

const BattlePassContent = () => {
    return (
        <ContentWrapper>
            <ContentBody>
                <ContentHeader>
                    <Select
                        label="Выбор сервера:"
                        options={options}
                        onSelect={(value: string) => console.log('Selected:', value)}
                        defaultValue="arcanum"
                    />
                    <Select
                        label="Выбор персонажа:"
                        options={optionsPeaple}
                        onSelect={(value: string) => console.log('Selected:', value)}
                        defaultValue="arcanum"
                    />
                </ContentHeader>
                <ContentOverview src='/overview.svg' />
                <ContentBattlePassTitle>Battle Pass / arcanum</ContentBattlePassTitle>
                <ContentBattlePass>
                    <ContentBattlePassTariff>
                        <CurrentLevel>
                            <CurrentLevelNumber>44</CurrentLevelNumber>
                            level
                        </CurrentLevel>
                        <TariffFree>
                            <img src="/svg_2.svg" />
                            <GradientTextFree>FREE</GradientTextFree>
                        </TariffFree>
                        <TariffGold>
                            <TariffGoldWrapper>
                                <img src="/svg_1.svg" />
                                <GradientTextGold>GOLD</GradientTextGold>
                            </TariffGoldWrapper>
                        </TariffGold>
                    </ContentBattlePassTariff>
                    <ContenBattlePassList>
                        <ContentBattlePassProgress>
                            {exp}/200
                            <ProgressBar exp={exp} />
                        </ContentBattlePassProgress>
                        <ContentList>
                            {mokeDB.map(item => (
                                <Item
                                    id={item.id}
                                    free={item.free}
                                    gold={item.gold}
                                    isCurrent={item.id < currentLevel}
                                    isNext={item.id > currentLevel}
                                />
                            ))}
                        </ContentList>
                    </ContenBattlePassList>
                </ContentBattlePass>
            </ContentBody>

        </ContentWrapper>
    )
}

export default BattlePassContent;