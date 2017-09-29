Rails.application.routes.draw do
  root 'blogs#index'

  resources :blogs

  namespace :api do
    namespace :v1 do
      resources :blogs, only: [:index, :create, :destroy, :update]
    end
  end
end
