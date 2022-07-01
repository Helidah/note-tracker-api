Rails.application.routes.draw do
<<<<<<< HEAD
=======
  resources :notes, only: [:index, :create, :show]
  resources :users, only: [:index, :update]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

>>>>>>> 8f0631824750801ad0af2a7d670859552d5950b1
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
