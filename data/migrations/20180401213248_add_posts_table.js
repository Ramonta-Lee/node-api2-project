exports.up = function(knex) {
  return knex.schema.createTable('posts', function(posts) {
    // incrementing post ids 
    posts.increments();

    posts.string('title', 1024).notNullable();
    posts.text('contents').notNullable();

    posts.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts');
};