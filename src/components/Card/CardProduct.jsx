import React, {useEffect} from 'react'
import {Card, Feed} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

import avatar from '../../assets/images/jenny.jpg';
import avatar2 from '../../assets/images/elliot.jpg';
import salesIcon from '../../assets/images/SalesTurnover.svg';
import './Card.css'


function CardProduct(props) {

    const contentProduct = () => (
        <Feed>
            {
                (props.products.length > 0) &&
                props.products.map((product, idx) => {
                    return (
                        <Feed.Event className="list" key={idx}>
                            <Feed.Label style={{borderRadius: "2px"}} image={(idx % 2 === 0) ? avatar : avatar2}/>
                            <Feed.Content>
                                <div className="name">
                                    {product.name}
                                </div>
                                <div className="total flex-between">
                                    <span>{product.price}</span>
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
                                <div>{sale.price}</div>
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
                        <span>{props.category.title}</span>
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
