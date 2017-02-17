class FavoritesController < ApplicationController
  def show
    article_id = params[:article_id]
    article_id.to_f
    @favorite =  Favorite.find_by(user_id: current_user.id, article_id: article_id)
  end
  def create
    current_user.favorites.create(incompetence: true, article_id: params[:article_id])
    redirect_to article_path(params[:article_id])
  end

  def destroy
    Favorite.find_by(user_id: current_user.id, article_id: params[:article_id]).destroy
    redirect_to article_path(params[:article_id])
  end
end
