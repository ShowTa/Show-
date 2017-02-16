class FavoritesController < ApplicationController
  def create
    current_user.favorites.create(incompetence: true, article_id: params[:article_id])
    redirect_to article_path(params[:article_id])
  end

  def destroy
    Favorite.find_by(user_id: current_user.id, article_id: params[:article_id]).destroy
    redirect_to article_path(params[:article_id])
  end
end
