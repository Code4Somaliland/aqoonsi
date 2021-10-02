import { StatementModel } from '../Models/statementModel';
export const statementList: StatementModel[] = [
    // AU
    new StatementModel({
        modelName: "au",
        text: `The fact that the "union between Somaliland and Somalia was never ratified" and
						also malfunctioned when it went into went into action from 1960 to 1990, makes
						Somaliland's search for recognition historically unique and self-justified in African
						political history`,
        url: `/assets/file/au-fact-finding.pdf`,
        title: `African Union 2005`,
        subtitle: `2005 fact finding mission`,
        image: `/assets/img/forground/au.png`,
        imageStyle: `max-width: 50%;"`,
        moreText: `(Read more)`
    })
]