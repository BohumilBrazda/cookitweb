import Amplify from "aws-amplify";
import Storage from '@aws-amplify/storage';

export default function configureAmplify(){
    Amplify.configure({
        Auth: {
            identityPoolId: 'eu-central-1:bae20654-daa6-4b6b-bdcf-0d269c79bb27',
            region: 'eu-central-1',
            userPoolId: 'eu-central-1_1RwM8ycYF',
            userPoolWebClientId: '71a3jh6nflafpprh7u83c552tr'
        },
        Storage: {
            bucket: 'cookit-app-data',
            region: 'eu-central-1',
            identityPoolId: 'eu-central-1:bae20654-daa6-4b6b-bdcf-0d269c79bb27',
        }
    });
}

export function setS3Config(bucket, level){

    Storage.configure({
        bucket: bucket,
        level: level,
        region: 'eu-central-1',
        identityPoolId: 'eu-central-1:bae20654-daa6-4b6b-bdcf-0d269c79bb27',
    });
}