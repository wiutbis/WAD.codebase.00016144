using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016144.Data;
using WAD.BACKEND._00016144.Models;
using WAD.BACKEND._00016144.Repositories;
using WAD.BACKEND._00016144.Controllers;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
               policy =>
               {
                   policy.WithOrigins("http://localhost:5107")
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                           .AllowAnyOrigin();
               });
});

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<GeneralDBContext>(
  o => o.UseSqlServer(
    builder.Configuration.GetConnectionString("SqlServerConnection")));

builder.Services.AddScoped<IRepository<Book>, BookRepository>();
builder.Services.AddScoped<IRepository<Category>, CategoryRepository>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();