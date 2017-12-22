import * as featureGenerator from 'src/generator';

declare namespace featureNameGenerator {
    class FeatureNameGenerator {
        public static generate = featureGenerator.generate;

    }
}

export = featureNameGenerator.FeatureNameGenerator;
