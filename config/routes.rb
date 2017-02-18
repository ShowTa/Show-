Rails.application.routes.draw do
  devise_for :users

  root 'articles#index'

  resources :users, only: [:show]
  resources :articles do
    collection do
      get :draft_index
    end
    resources :comments, only: :create
    resource :favorites, only: [:show, :create, :destroy]
  end
  post 'articles/:tag', to: 'articles#create'
  get '/search', to:'search#index'
  get '/search/:word', to: 'search#index'
  get '/users/:id/:favorite', to: 'user#show'
end
