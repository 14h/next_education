/* eslint-disable no-nested-ternary */
import { useState } from "react";
import { FooterContainer } from "./footer";
import { Card, Header, Loading, Player } from "../components";

function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
}


const series1 = [
    {
        id: getUUID(),
        title: "The cities of tomorrow",
        description:
        "The city of the future is designed for accessibility and safety as more people populate urban areas. Residents have healthier lives with more streamlined access to nature, services, and automated technology.",
        genre: "Technology",
        maturity: "12",
        slug: "cities.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.54.33.png"
    },
    
    {
        id: getUUID(),
        title: "Is there a free will?",
        description:
        "Free will is the capacity of agents to choose between different possible courses of action unimpeded. Free will is closely linked to the concepts of moral responsibility, praise, culpability, sin, and other judgements which apply only to actions that are freely chosen. It is also connected with the concepts of advice, persuasion, deliberation, and prohibition.",
        genre: "Philosophy",
        maturity: "12",
        slug: "freewill.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.54.56.png"
    },
    {
        id: getUUID(),
        title: "The effect of sugar to our brain",
        description:
            "Throughout the body, excess sugar is harmful. Even a single instance of elevated glucose in the bloodstream can be harmful to the brain, resulting in slowed cognitive function and deficits in memory and attention.",
        genre: "Health",
        maturity: "18",
        slug: "sugar.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.54.16.png"
    },
    {
        id: getUUID(),
        title: "How do machines 'see' the world",
        description:
            "Computer vision systems sometimes make inferences about a scene that fly in the face of common sense.",
        genre: "Artificial Intelligence",
        maturity: "12",
        slug: "machines.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.54.06.png"
    }
];


const series2= [
    {
        id: getUUID(),
        title: "How demonstrations keep the peace",
        description:
            "Demonstrations are a fundamental right in democracies. For thousands of years, people have come together to express their opinions and protest against injustice. But to what extent do demonstrations have a positive effect on peace and where are the limits?",
        genre: "Politics",
        maturity: "12",
        slug: "demo.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.54.24.png"
    },
    {
        id: getUUID(),
        title: "Will Globalisation ever be completed",
        description:
        "Globalization is the word used to describe the growing interdependence of the world’s economies, cultures, and populations, brought about by cross-border trade in goods and services, technology, and flows of investment, people, and information.",
        genre: "Geography",
        maturity: "12",
        slug: "global.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.55.16.png"
    },
    {
        id: getUUID(),
        title: "The romans were 400 years ahead",
        description:
            "The ancient Romans were so advanced for their time in combat because they had all the equipment, armour and weapons that would be far superior than everyone else in the world for the next century. The Romans took most of their other ideas off the greeks after they conquered them.",
        genre: "History",
        maturity: "18",
        slug: "romans.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.53.35.png"
    },
    {
        id: getUUID(),
        title: "Japan then and now",
        description:
            "The economic history of Japan is considered to be the period from the 9th century, from which the first economic activities are documented. From the 15th century, the first contacts with European seafarers are established. The development of Japan into an industrial nation took its beginnings even before the opening of the country in the middle of the 19th century. But how was Japan able to rise to become one of the world's most influential industrial nations in such a short time?",
        genre: "History",
        maturity: "12",
        slug: "japan.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.53.44.png"
    }
];

const series3 = [
    {
        id: getUUID(),
        title: "How hackathons change the world",
        description:
        "We are an entrepreneurial hackathon that vows to unite students from diverse backgrounds to tackle global issues using technology - while having fun",
        genre: "Technology",
        maturity: "12",
        slug: "hackathon.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.57.07.png"
    },
    {
        id: getUUID(),
        title: "Learn basic Javascript",
        description:
        "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.",
        genre: "Technology",
        maturity: "18",
        slug: "js.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.54.50.png"
    },
    {
        id: getUUID(),
        title: "Learn to accept death",
        description:
            "To accept death we must have a belief that death is simply a natural part of life and something which is out of our control. And to do this we must find a way to make ourselves feel comfortable with the concept of death and our own mortality.",
        genre: "Philosophy",
        maturity: "12",
        slug: "death.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.53.55.png"
    },
    {
        id: getUUID(),
        title: "Urban gardening",
        description:
        "Urban horticulture specifically is the study of the relationship between plants and the urban environment. It focuses on the functional use of horticulture so as to maintain and improve the surrounding urban area.",
        genre: "DIY",
        maturity: "12",
        slug: "urban.png",
        image: "/images/users/Bildschirmfoto 2022-03-24 um 20.54.41.png"
    }
];
export function BrowseContainer() {
    const [category, setCategory] = useState("series");
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <>
            <Loading.ReleaseBody />

            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.TextLink
                            active={category === "series" ? "true" : "false"}
                            onClick={() => setCategory("series")}
                        >
                            All courses
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === "films" ? "true" : "false"}
                            onClick={() => setCategory("films")}
                        >
                            Favorites
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src='' />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src='' />
                                    <Header.TextLink>
                                        Abdallah
                                    </Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink
                                        onClick={() =>
                                            console.log("s")
                                        }
                                    >
                                        Sign out
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>
                        Next Education
                    </Header.FeatureCallOut>
                    <Header.Text>
                        We give you easy and fast access to courses from various fields 
                        at your university. The wide range of courses and briefly summarized 
                        key learnings of the individual offers should help you to find topics 
                        that interest you. It is important to deal with other topics besides your studies 
                        and to broaden your horizon more and more over the course of your life.
                    </Header.Text>
                    <Header.PlayButton />
                </Header.Feature>
            </Header>

            <Card.Group>
                <Card key='Your workshops'>
                    <Card.Title>Popular</Card.Title>
                    <Card.Entities>
                        {series1.map((slideItem: any) => (
                        <Card.Item key={slideItem.docId} item={slideItem}>
                            <Card.Image
                                src={slideItem.image}
                            />
                            <Card.Meta>
                                <Card.SubTitle>
                                    {slideItem.title}
                                </Card.SubTitle>
                                <Card.Text>
                                    {slideItem.description}
                                </Card.Text>
                            </Card.Meta>
                        </Card.Item>
                            ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                        <Player>
                            <Player.Button />
                            <Player.Video src="" />
                        </Player>
                    </Card.Feature>
                </Card>
                <Card key='Your workshops'>
                    <Card.Title>Lectures</Card.Title>
                    <Card.Entities>
                        {series2.map((slideItem: any) => (
                            <Card.Item key={slideItem.docId} item={slideItem}>
                                <Card.Image
                                    src={slideItem.image}
                                />
                                <Card.Meta>
                                    <Card.SubTitle>
                                        {slideItem.title}
                                    </Card.SubTitle>
                                    <Card.Text>
                                        {slideItem.description}
                                    </Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                        <Player>
                            <Player.Button />
                            <Player.Video src="" />
                        </Player>
                    </Card.Feature>
                </Card>
                <Card key='Your workshops'>
                    <Card.Title>Workshops</Card.Title>
                    <Card.Entities>
                        {series3.map((slideItem: any) => (
                            <Card.Item key={slideItem.docId} item={slideItem}>
                                <Card.Image
                                    src={slideItem.image}
                                />
                                <Card.Meta>
                                    <Card.SubTitle>
                                        {slideItem.title}
                                    </Card.SubTitle>
                                    <Card.Text>
                                        {slideItem.description}
                                    </Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                        <Player>
                            <Player.Button />
                            <Player.Video src="" />
                        </Player>
                    </Card.Feature>
                </Card>
            </Card.Group>

            <FooterContainer />
        </>
    )
}
