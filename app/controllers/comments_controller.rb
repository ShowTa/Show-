class CommentsController < ApplicationController
  def create
    current_user.comments.create(comment_params)

    redirect_to article_path(params[:article_id])
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :article_id)
  end
end
