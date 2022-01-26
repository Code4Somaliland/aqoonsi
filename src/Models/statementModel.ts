export type modelNames = ''|'au' | 'robert' | 'economist' | 'zitto' |
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
    |'hardy' |'loone';

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
    constructor(init?: Partial<StatementModel>) {
        Object.assign(this, init);
    }
}


