import React, {} from 'react'
import {Card, Feed} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

import productCompetitor from '../../assets/images/Product-Competitor.png';
import salesIcon from '../../assets/images/SalesTurnover.svg';
import frisianPlug from '../../assets/images/frisianflug.png'
import './Card.css'


function CardProduct(props) {

    const contentProduct = () => (
        <Feed>
            {
                (props.products.length > 0) &&
                props.products.map((product, idx) => {
                    return (
                        <Feed.Event className={(idx === 0) ?  "highlighted" : "list"} key={idx}>
                            <Feed.Label image={(idx % 2 === 0) ? frisianPlug : productCompetitor}/>
                            <Feed.Content>
                                <div className="name">
                                    {product.name}
                                </div>
                                <div className="total flex-between">
                                    <span className="text-title-2">Rp. {product.price}</span>
                                    <span>{product.totalSales}</span>
                                </div>
                            </Feed.Content>
                        </Feed.Event>
                    )
                })
            }
        </Feed>
    )

    const contentSales = () => (
        <Feed>
            {
                (props.sales.length > 0) &&
                props.sales.map((sale, idx) => {
                    return (
                        <div className="flex-between" key={idx}>
                            <div className="">
                                <div className="text-heading-3">Rp {sale.price}</div>
                                <div className="detail">
                                    <span className="percentage">&#8595; {sale.change}</span>
                                    <span className="desc">{sale.desc}</span>
                                </div>
                            </div>
                            <Feed.Label style={{width: "48px"}} image={salesIcon}/>
                        </div>
                    )
                })
            }
        </Feed>
    )

    return (
        <Card style={{width: props.width, height: props.height}}>
            <Card.Content>
                <Card.Header>
                    <div className="flex-between">
                        <span className={(props.products) ? "text-title-1" : "text-title-2"}>{props.category.title}</span>
                        <div className="menu">
                            <div className="dots"></div>
                            <div className="dots"></div>
                            <div className="dots"></div>
                        </div>
                    </div>

                </Card.Header>
            </Card.Content>
            <Card.Content>
                {(props.products)
                    ?
                    contentProduct()
                    : contentSales()
                }
            </Card.Content>
        </Card>
    )
}


export default withRouter(CardProduct)
