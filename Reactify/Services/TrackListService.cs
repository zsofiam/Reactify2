using Reactify.Data;
using Reactify.Models;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class TrackListService : ITrackListService
    {
        public ApplicationDbContext _dbContext;

        public TrackListService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Account RetrieveAccountFromDb(int userId)
        {
            return _dbContext.Accounts.Where(account => account.User.Id == userId).FirstOrDefault();
        }
        public void SaveTrackToTracklist(Account account, Track track)
        {
            account.Tracks.Add(track);
            _dbContext.SaveChanges();
        }
        public void DeleteTrackFromTracklist(Account account, Track searchedTrack)
        {
            Track trackToRemove = account.Tracks.Find(track => track.Id == searchedTrack.Id);
            account.Tracks.Remove(trackToRemove);
            _dbContext.Remove(trackToRemove);
            _dbContext.SaveChanges();
        }

        public Track CreateTrackFromData(TrackWithUserId trackWithUserId)
        {
            return new Track
            {
                Id = trackWithUserId.Id,
                Title = trackWithUserId.Title,
                Duration = trackWithUserId.Duration,
                ReleaseDate = trackWithUserId.ReleaseDate,
                Preview = trackWithUserId.Preview,
                Image = trackWithUserId.Image,
                Artist = trackWithUserId.Artist,
                ArtistName = trackWithUserId.ArtistName,
                Album = trackWithUserId.Album
            };
        }
    }
}
