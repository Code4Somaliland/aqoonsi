export const modelNamesArray = ['', 'fire', 'fire/what', 'fire/where',
    'fire/donate', 'fire/recognise', 'fire/what-arial',
    'fire/what-satellite', 'fire/what-1988', 'fire/what-15h',
    'fire/what-morning', 'fire/what-messages',
    'au', 'mou', 'hoover', 'heritage', 'economist',
    'gavinbill', 'risch', 'ndaa2023',
    'perry', 'taiwan', 'uk', 'frazer', 'tibor', 'olawunmi',
    'wiechel', 'cadic', 'kingi', 'robert',
    'rubin', 'bill',
    'raila', 'cannon', 'iqbal', 'zitto',
    'dpworld', 'lindsay', 'pham', 'chris', 'loone',
    'cohen', 'schwartz', 'hamdy', 'rushanara',
    'doughty', 'tugendhat', 'mitchell',
    'alec', 'buckland',
    'johnson', 'gardiner', 'betts',
    'anderson', 'spellar', 'cairns',
    'stewart', 'blomfield', 'jones',
    'daly', 'greenwood',
    'mccarthy', 'rushanara2', 'stewart2',
    'gavin2', 'hardy', 'world'] as const;

export type modelNames = typeof modelNamesArray[number];
export class StatementModel {
    readonly text: string;
    readonly url: string;
    readonly url2: string;
    readonly image: string;
    readonly imageStyle: string;
    readonly title: string;
    readonly subtitle: string;
    readonly modelName: modelNames;
    readonly country: string;
    readonly page: string;
    readonly list: string = 'world'
    constructor(init?: Partial<StatementModel>) {
        Object.assign(this, init);
    }

    getNextModelName(name: modelNames): modelNames | null {
        if (name === 'taiwan') {
            return 'frazer'
        }
        const index = modelNamesArray.indexOf(name);
        if (index === -1 || index === modelNamesArray.length - 1) {
            return null;
        }
        return modelNamesArray[index + 1];
    }

}


