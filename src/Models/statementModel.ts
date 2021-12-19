export type modelNames = 'au' | 'robert' | 'economist' | 'zitto' |
    'rubin' | 'bill' | 'taiwan' | 'frazer' |
    'raila' | 'tibor' | 'cannon' | 'iqbal' |
    'dpworld' | 'lindsay' | 'pham' | 'chris'|
    'cohen' | 'heritage' | 'schwartz' |
    'gavin'| 'guled';

export class StatementModel {
    readonly text: string;
    readonly url: string;
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


