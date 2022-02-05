import React from "react";
import "./App.css";
import Data from "./apple.json";
import Options from "./Options";

function Apple() {
  return (
    <div className="Apple">
      <Options/>
      <div className="posts">
        {Data.map((post) => {
          return (
            <div class="flex">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img
                      src={post.urlToImage}
                      class="card-img-top"
                      alt="Skyscrapers"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{post.title}</h5>
                      <p class="card-text">{post.description}</p>
                      <a href={post.url} data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <button type="button" class=" inline-block px-6 py-2.5 bg-black-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
                      </a>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">{post.publishedAt}</small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img
                      src={post.urlToImage1}
                      class="card-img-top"
                      alt="Los Angeles Skyscrapers"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{post.title1}</h5>
                      <p class="card-text">{post.description1}</p>
                      <a href={post.url1} data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <button type="button" class=" inline-block px-6 py-2.5 bg-black-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
                      </a>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">{post.publishedAt1}</small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img
                      src={post.urlToImage2}
                      class="card-img-top"
                      alt="Palm Springs Road"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{post.title2}</h5>
                      <p class="card-text">{post.description2}</p>
                      <a href={post.url2} data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <button type="button" class=" inline-block px-6 py-2.5 bg-black-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
                      </a>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">{post.publishedAt2}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Apple;
