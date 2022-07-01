class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :update ,:destroy]

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    def show
      user = User.find_by(params[:id])
      render json: user
      render json: @current_user
    end

    def index
        render json: User.all
    end


    def update
      user = User.update!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
    
  
    # def destroy
    #   note = Note.find_by(id: params[:id])
    #   if note
    #     note.destroy
    #     head :no_content
    #   else
    #     render json: { error: "Note not found" }, status: :not_found
    #   end

    # end

    private
  
    def user_params
      params.permit(:username, :email, :password, :password_confirmation, :image_url, :bio)
    end
  
end
