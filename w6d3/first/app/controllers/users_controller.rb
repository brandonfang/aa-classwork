class UsersController < ApplicationController
    def index
        users = User.all

        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create 
        user = User.new(user_params)
        if user.save!
            # redirect to #show
            redirect_to "/users/#{user.id}"
        else
            render json: user.errors.full_messages
        end
    end

    def update 
        user = User.find_by(id: params[:id])
        if user.update_attributes(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        render json: user
    end

    private
    def user_params
        params.require(:user).permit(:name, :email)
    end
end
