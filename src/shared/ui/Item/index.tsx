import type { FC } from "react"
import { ContentItem, GradientTextGold, IsChecked, Level, Wrapper, ItemCount } from "./styles"

interface IItem {
    itemName: string,
    itemImg?: string,
    itemCount?: number
}

interface IProps {
    id: number,
    free: IItem,
    gold: IItem,
    isCurrent: boolean,
    isNext: boolean
}


const Item: FC<IProps> = ({ id, free, gold, isCurrent, isNext }) => {
    return (
        <Wrapper>
            <Level isCurrent={isCurrent} isNext={isNext}>
                {id % 10 === 0 ? (
                    <GradientTextGold>{id}</GradientTextGold>
                ) : (
                    <>{id}</>
                )}
            </Level>
            {isCurrent ?
                <IsChecked>
                    <img src="/check_circle_icon.svg" />
                </IsChecked> :
                <ContentItem isNext={isNext}>
                    {free.itemImg ?
                        <img src={free.itemImg} />
                        :
                        <img src="/image(1).svg" />
                    }
                    {free.itemCount &&
                        <ItemCount>{free.itemCount}</ItemCount>
                    }
                    {free.itemName}
                </ContentItem>
            }
            {isCurrent ?
                <IsChecked>
                    <img src="/check_circle_icon.svg" />
                </IsChecked> :
                <ContentItem isNext={isNext}>
                    {gold.itemImg ?
                        <img src={gold.itemImg} />
                        :
                        <img src="/image(1).svg" />
                    }
                    {gold.itemCount &&
                        <ItemCount>{gold.itemCount}</ItemCount>
                    }
                    {gold.itemName}
                </ContentItem>
            }
        </Wrapper>
    )
}

export default Item