
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genre').del()
    .then(function () {
      // Inserts seed entries
      return knex('genre').insert([
        {song_id: 1, rock: true, alt_rock: true, grunge: true },
        {song_id: 2, rock: true, alt_rock: true, grunge: true },
        {song_id: 3, rock: true, alt_rock: true, grunge: true },
        {song_id: 4, rock: true, alt_rock: true, grunge: true },
        {song_id: 5, rock: true, alt_rock: true },
        {song_id: 6, rock: true, alt_rock: true },
        {song_id: 7, rock: true, alt_rock: true },
        {song_id: 8, rock: true, alt_rock: true },
        {song_id: 9, rock: true, alt_rock: true },
        {song_id: 10, rock: true, alt_rock: true },
        {song_id: 11, rock: true, pop: true },
        {song_id: 12, rock: true, pop: true },
        {song_id: 13, rock: true, pop: true },
        {song_id: 14, rock: true, pop: true },
        {song_id: 15, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 16, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 17, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 18, rock: true, hard_rock: true, heavy_metal: true},

      ]);
    });
};
