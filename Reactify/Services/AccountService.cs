﻿using Reactify.Data;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class AccountService : IAccountService
    {
        private ApplicationDbContext _dbContext;

        public AccountService()
        {
            _dbContext = new ApplicationDbContext();
        }

        public List<Track> GetPlayerList(string userId)
        {
            throw new NotImplementedException();
        }
    }
}