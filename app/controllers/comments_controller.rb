class CommentsController < ApplicationController
  def create
    current_user.comments
  end
end
