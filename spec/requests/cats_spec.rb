require 'rails_helper'

RSpec.describe "Cats", type: :request do
  describe "GET /index" do
    it 'gets all the cats' do
      Cat.create(
        name:'Felix',
        age: 5,
        enjoys:'playing with toys',
        image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
      )
      get '/cats'
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(cat.length).to eq(1)
      expect(cat[0]['name']).to eq('Felix')
    end
  end

  describe "POST /create" do
    it 'adds a new cat to the database' do
      cat_params = {
        cat: {
        name: 'Smokey',
        age: 3,
        enjoys: 'being brushed and looking pretty',
        image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
        }
      }
      post '/cats', params: cat_params
      expect(response).to have_http_status(200)
      cat = Cat.first
      expect(cat.name).to eq('Smokey')
    end
  end

  it 'doesnt create a cat without a name' do
    cat_params = {
      cat: {
        age: 8,
        enjoys:'walks on a leash',
        image: 'cat-image.com'
      }
    }
      post '/cats', params: cat_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
  end

  it "doesn't create a cat without an age" do
    cat_params = {
      cat: {
        name:"Mr. Tiddlywinks",
        enjoys:"belly rubs and headbutts",
        image:"cat-image.com"
      }
    }
    post '/cats', params: cat_params
    expect(response.status).to eq 422
    new_cat = JSON.parse(response.body)
    expect(new_cat['age']).to include "can't be blank"
  end

  it "doesn't create a cat without an age" do
    cat_params = {
      cat: {
        name:"Mr. Tiddlywinks",
        age: 6,
        image:"cat-image.com"
      }
    }
    post '/cats', params: cat_params
    expect(response.status).to eq 422
    new_cat = JSON.parse(response.body)
    expect(new_cat['enjoys']).to include "can't be blank"
  end

  it "doesn't create a cat without an age" do
    cat_params = {
      cat: {
        name:"Mr. Tiddlywinks",
        age: 6,
        enjoys:"belly rubs and headbutts",
      }
    }
    post '/cats', params: cat_params
    expect(response.status).to eq 422
    new_cat = JSON.parse(response.body)
    expect(new_cat['image']).to include "can't be blank"
  end


end
