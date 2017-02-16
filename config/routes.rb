Rails.application.routes.draw do
  devise_for :users

  root 'articles#index'

  resources :users, only: [:show]
  resources :articles do
    collection do
      get :draft_index
    end
    resources :comments, only: :create
    resource :favorites, only: [:create, :destroy]
  end
  get '/search', to:'search#index'
  get '/search/:word', to: 'search#index'
end
