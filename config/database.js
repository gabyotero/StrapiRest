module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'C:\Users\HP\Desktop\News_app\data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
