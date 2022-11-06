import Head from 'next/head';
import TopBar from '../components/topbar';
import styles from '../styles/Dashboard.module.css';
import React from 'react';
import useCollapse from 'react-collapsed';
import Image from "next/image"
import location from "../images/address-3.png"
import clock from "../images/clock.png"
import people from "../images/people.png"
import {MDBRange} from 'mdb-react-ui-kit';
import {useState} from 'react'
import Footer from "../components/footer"
import Link from "next/link"


interface OfferProps {
    farm_name: string;
    vegetable: string;
    vegetableEmoji: string;
    capacity: {min: number, max: number};
    distance: string;
    description: string;
    address: string;
    dateRange: {min: Date, max: Date};
}


const submit = async (event:any) => {
    event.preventDefault();
    alert(event.target.range.value)
};

const USER = "farmer"


function Offer(props : OfferProps) {
    return (
        <div className={styles.offer}>
            <h1>{props.farm_name}</h1>
            <h5>{props.distance} from you</h5>
            
            <div className={styles.row}>
                <div className={styles.col}>
                    <h4 className={styles.veg_emoji}>{props.vegetableEmoji}</h4>
                    <h4 className={styles.offer_quantity}>{props.vegetable}</h4>
                </div>
                <div className={styles.col}>
                    <Image src={location} alt="" width={50}></Image>
                    <h4 className={styles.address}>{props.address}</h4>
                </div>
                <div className={styles.col}>
                    <Image src={clock} alt="" width={50}></Image>
                    <h4 className={styles.address}>{props.dateRange.min.toJSON().slice(0, 10)} - {props.dateRange.max.toJSON().slice(0, 10)}</h4>
                </div>
                <div className={styles.col}>
                    <Image src={people} alt="" width={50}></Image>
                    <h4 className={styles.address}>{props.capacity.min} - {props.capacity.max}</h4>
                </div>
            </div>
            <div className={styles.third_row}>
                <Collapsible {...props}/>
            </div>
        </div>
    );
}


function Collapsible(props: OfferProps){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const [value, setValue] = useState(0);

    return (
        <div className={styles.collapsible}>
            <div className={styles.header} {...getToggleProps()}>
                {isExpanded ? <></> : <button className={styles.expand_offer_button}>+</button>}
            </div>
            <div {...getCollapseProps()}>
                <div className={styles.content}>
                    <div className={styles.description}>{props.description}</div>
                    <div className={styles.inputs}>
                        <form onSubmit={submit}>
                            <div className={styles.col2}>
                            
                                <div className={styles.slidecontainer}>
                                    <label>Group size: </label>
                                    <input type="number" id="range" name="okok" min="0" max={props.capacity.max.toString()}></input>
                                </div>
                                <button type="submit" className={styles.submit} id="output">Available for gleaning</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.header} {...getToggleProps()}>
                {isExpanded ? <button className={styles.expand_offer_button}>-</button> : <></>}
            </div>
            </div>
            <script type="text/javascript" src="/static/script.js"></script>
        </div> 
        );
}

function AddEvent () {
    return(
        <div className={styles.add_event_container}>
            <Link className={styles.add_event} href="/create">+</Link>
        </div>
    )
    
}


export default function Events() {
    //Table of randomly generated offers
    const offers = [
        {
            farm_name: 'Farm 1',
            vegetable: 'Tomato',
            vegetableEmoji: "🍅",
            capacity: {min: 8, max: 12},
            address: "907 Amarantes St., H7Y 2G9, QC, CA",
            distance: '5km',
            dateRange: {min: new Date(2022, 11, 1), max: new Date(2022, 11, 5)},
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.'
        },
        {
            farm_name: 'Farm 2',
            vegetable: 'Potato',
            vegetableEmoji: "🥔",
            capacity: {min: 5, max: 7},
            address: "907 Amarantes St., H7Y 2G9, QC, CA",
            distance: '10km',
            dateRange: {min: new Date(2022, 11, 1), max: new Date(2022, 11, 5)},
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.'
        },
        {
            farm_name: 'Farm 3',
            vegetable: 'Cabbage',
            vegetableEmoji: "🥬",
            capacity: {min: 15, max: 20},
            address: "907 Amarantes St., H7Y 2G9, QC, CA",
            distance: '15km',
            dateRange: {min: new Date(2022, 11, 1), max: new Date(2022, 11, 5)},
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.'
        },
        {
            farm_name: 'Farm 4',
            vegetable: 'Carrot',
            vegetableEmoji: "🥕",
            capacity: {min: 8, max: 10},
            address: "907 Amarantes St., H7Y 2G9, QC, CA",
            distance: '20km',
            dateRange: {min: new Date(2022, 11, 1), max: new Date(2022, 11, 5)},
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.'
        },
        {
            farm_name: 'Farm 5',
            vegetable: 'Onion',
            vegetableEmoji: "🧄",
            capacity: {min: 5, max: 8},
            address: "907 Amarantes St., H7Y 2G9, QC, CA",
            distance: '25km',
            dateRange: {min: new Date(2022, 11, 1), max: new Date(2022, 11, 5)},
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.'
        },
        {
            farm_name: 'Farm 6',
            vegetable: 'Cucumber',
            vegetableEmoji: "🥒",
            capacity: {min: 10, max: 20},
            address: "907 Amarantes St., H7Y 2G9, QC, CA",
            distance: '30km',
            dateRange: {min: new Date(2022, 11, 1), max: new Date(2022, 11, 5)},
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.'
        },
    ];


    return (
        <div>
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                }
            `}</style>
            <div>
                <Head>
                    <title>Gleanathon</title>
                </Head>
                <TopBar></TopBar>
            </div>
            <div className={styles.dashboard}>
                <div className={styles.dashboard_header}>
                    <h4 className={styles.dashboard_title}> Offers Near You</h4>
                </div>
                <div className={styles.dashboard_content}>
                    {offers.map((x: OfferProps, i: number) => (
                        <Offer {...x} key={i}></Offer>
                    ))}
                </div>
            </div>
            {USER === "farmer" ? <AddEvent></AddEvent> : <></>}
            <Footer></Footer>
        </div>

    );
}