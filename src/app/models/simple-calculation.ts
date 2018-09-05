export module Models {
    export class SimpleCalculation {

        income: number;
        savings: number;
        result: string;

        // todo use decorators to change dirty changes
        public onChange: ()=> void;
    }
}