﻿using System.ComponentModel.DataAnnotations;

namespace WAD.BACKEND._00016144.Models
{
    public class Category
    {
        public int ID { get; set; }
        private string _name;
        [Required(ErrorMessage = "Name is required")]
        public string Name
        {
            get => _name;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Name cannot be null or empty.");
                }

                _name = value;
            }
        }
    }
}
