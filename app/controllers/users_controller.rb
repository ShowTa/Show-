class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @name = @user.name
    @articles = @user.articles.page(params[:page]).per(5).order("created_at DESC")
  end
end
