const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const users = [
    { id: 1, firstName: 'sardor', age: 21 },
    { id: 2, firstName: 'nodir', age: 22 },
]

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
    }
})

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(pVal, args) {
                return users.find(u => u.id == args.id)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})