Rails.application.routes.draw do
  devise_for :users
  root 'articles#index'
  resources :articles do
    collection do
      get :draft_index
    end
    resources :comments, only: :create
  end
end
