/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
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


const series = [
    {
        id: getUUID(),
        title: "Tiger King",
        description:
            "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
        genre: "documentaries",
        maturity: "18",
        slug: "tiger-king"
    },
    {
        id: getUUID(),
        title: "Amanda Knox",
        description:
            "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
        genre: "documentaries",
        maturity: "12",
        slug: "amanda-knox"
    },
    {
        id: getUUID(),
        title: "Citizenfour",
        description:
            "Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.",
        genre: "documentaries",
        maturity: "12",
        slug: "citizenfour"
    }
]

export function BrowseContainer() {
    const [category, setCategory] = useState("series");
    const [searchTerm, setSearchTerm] = useState("");
    const [profile] = useState<any>({});
    const [slideRows, setSlideRows] = useState(series);

    useEffect(() => {
        setTimeout(() => {
        }, 3000);
    }, [profile.displayName]);


    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ["data.description", "data.title", "data.genre"]
        });

        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (
            slideRows.length > 0 &&
            searchTerm.length > 3 &&
            results.length > 0
        ) {
            setSlideRows(results);
        } else {
            setSlideRows(series);
        }
        // eslint-disable-next-line
    }, [searchTerm]);

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
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === "films" ? "true" : "false"}
                            onClick={() => setCategory("films")}
                        >
                            Films
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
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton />
                </Header.Feature>
            </Header>

            <Card.Group>
                <Card key='Your workshops'>
                    <Card.Title>Your workshops</Card.Title>
                    <Card.Entities>
                        {slideRows.map((slideItem: any) => (
                        <Card.Item key={slideItem.docId} item={slideItem}>
                            <Card.Image
                                src={`/images/${category}/${slideItem.genre}/${slideItem.slug}/small.jpg`}
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
                            <Player.Video src="/videos/video-placeholder.mp4" />
                        </Player>
                    </Card.Feature>
                </Card>
                <Card key='Your workshops'>
                    <Card.Title>Your workshops</Card.Title>
                    <Card.Entities>
                        {slideRows.map((slideItem: any) => (
                            <Card.Item key={slideItem.docId} item={slideItem}>
                                <Card.Image
                                    src={`/images/${category}/${slideItem.genre}/${slideItem.slug}/small.jpg`}
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
                            <Player.Video src="/videos/video-placeholder.mp4" />
                        </Player>
                    </Card.Feature>
                </Card>
                <Card key='Your workshops'>
                    <Card.Title>Your workshops</Card.Title>
                    <Card.Entities>
                        {slideRows.map((slideItem: any) => (
                            <Card.Item key={slideItem.docId} item={slideItem}>
                                <Card.Image
                                    src={`/images/${category}/${slideItem.genre}/${slideItem.slug}/small.jpg`}
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
                            <Player.Video src="/videos/video-placeholder.mp4" />
                        </Player>
                    </Card.Feature>
                </Card>
            </Card.Group>

            <FooterContainer />
        </>
    )
}
