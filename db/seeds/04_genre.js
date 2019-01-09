
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
        {song_id: 19, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 20, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 21, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 22, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 23, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 24, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 25, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 26, rock: true, hard_rock: true, heavy_metal: true},
        {song_id: 27, rock: true, alt_rock: true, grunge: true},
        {song_id: 28, rock: true, alt_rock: true, grunge: true},
        {song_id: 29, rock: true, alt_rock: true, grunge: true},
        {song_id: 30, rock: true, alt_rock: true, grunge: true},
        {song_id: 31, rock: true, alt_rock: true, grunge: true},
        {song_id: 32, rock: true, alt_rock: true, grunge: true},
        {song_id: 33, rock: true, alt_rock: true, grunge: true},
        {song_id: 34, rock: true, alt_rock: true, grunge: true},
        {song_id: 35, rock: true, alt_rock: true, grunge: true},
        {song_id: 36, rock: true, alt_rock: true, grunge: true},
        {song_id: 37, folk: true },
        {song_id: 38, folk: true },
        {song_id: 39, folk: true },
        {song_id: 40, folk: true },
        {song_id: 41, folk: true },
        {song_id: 42, folk: true },
        {song_id: 43, folk: true },

      ]);
    });
};
