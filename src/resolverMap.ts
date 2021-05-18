import { IResolvers } from 'graphql-tools';
import { Context } from './models';
import { GraphQLResolveInfo } from 'graphql';

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): string {
            return `Hello world!`
        },
    },
};

export default resolverMap;