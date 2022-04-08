export type modelNames = ''|'world'|'au' | 'robert' | 'economist' | 'zitto' |
    'rubin' | 'bill' | 'taiwan' | 'frazer' |
    'raila' | 'tibor' | 'cannon' | 'iqbal' |
    'dpworld' | 'lindsay' | 'pham' | 'chris'|
    'cohen' | 'heritage' | 'schwartz' |
    'gavin'| 'guled' |'rushanara' |
    'doughty'|'tugendhat'|'mitchell' |
    'alec'| 'uk' | 'buckland' |
    'johnson'|'gardiner'|'betts'|
    'anderson'|'spellar' |'cairns'
    |'stewart' | 'blomfield'|'jones'|
    'daly' |'gavin2'|'greenwood'|
    'mccarthy'|'rushanara2'|'stewart2'
    | 'hardy' | 'loone' |'hamdy'
    | 'fire' | 'fire/what' | 'fire/where'
    | 'fire/donate' | 'fire/recognise' |'fire/what-arial'
    | 'fire/what-satellite' | 'fire/what-1988' | 'fire/what-15h' 
    | 'fire/what-morning' | 'fire/what-messages';
export class StatementModel {
    readonly text: string;
    readonly url: string;
    readonly url2: string;
    readonly image: string;
    readonly imageStyle: string;
    readonly title: string;
    readonly moreText: string;
    readonly subtitle: string;
    readonly modelName: modelNames;
    readonly country: string;
    readonly page: string;
    constructor(init?: Partial<StatementModel>) {
        Object.assign(this, init);
    }
}


